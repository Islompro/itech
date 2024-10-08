import { Fragment, useEffect, useState } from "react";
import SkeletonComp from "../components/Skeletion/Skeletion";
import { TbBasketPlus } from "react-icons/tb";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { notification } from "antd";
import { NavLink } from "react-router-dom";
import Case from "../img/case.png";
import { FaHeartCirclePlus } from "react-icons/fa6";


function Second({ count, setCount }) {
    const [blog, setBlog] = useState([]);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");
    const [priceRange, setPriceRange] = useState([0, 10000000]);
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const [show, setShow] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const dataRef = collection(db, "uyin");
            const unsubscribe = onSnapshot(dataRef, (snapshot) => {
                let malumot = [];
                snapshot.forEach((doc) => {
                    malumot.push({ ...doc.data(), id: doc.id }); // Faqat bitta qator
                });
                setBlog(malumot);
            });

            return () => unsubscribe();
        };

        fetchData();
    }, []);


    const handleLike = (dataCard) => {
        let data = localStorage.getItem("like");

        if (data) {
            data = JSON.parse(data);
        } else {
            data = [];
        }
        const existingItem = data.find(item => item.id === dataCard.id);
        if (existingItem) {
            existingItem.piece += 1;
            existingItem.price += Number(dataCard.price);
        } else {
            data.push({
                name: dataCard.title,
                img: dataCard.img,
                price: Number(dataCard.price),
                category: dataCard.category,
                matn: dataCard.matn,
                id: dataCard.id,
            });
        }
        localStorage.setItem("like", JSON.stringify(data));

        notification.success({
            message: "Sevimlilarga qo'shildi !",
            description: "Tanlagan mahsulotingiz sevimlilar bo'limidan topasiz !"
        });
    };

    const handleCart = (dataCard) => {
        let data = localStorage.getItem("cards");

        if (data) {
            data = JSON.parse(data);
        } else {
            data = [];
        }
        const existingItem = data.find(item => item.id === dataCard.id);
        if (existingItem) {
            existingItem.piece += 1;
            existingItem.price += Number(dataCard.price);
        } else {
            data.push({
                name: dataCard.title,
                img: dataCard.img,
                price: Number(dataCard.price),
                piece: 1,
                matn: dataCard.matn,
                id: dataCard.id,
            });
        }
        localStorage.setItem("cards", JSON.stringify(data));

        notification.success({
            message: "Savatga qo'shildi !",
            description: "Tanlagan mahsulotingiz savatga qo'shildi. Savatga o'tib buyurtma berishingiz mumkin !"
        });

        setCount(prevCount => prevCount + 1);
    };

    const filteredBlog = blog.filter((item) => {
        const title = item.title ? item.title.toLowerCase() : "";
        const searchLower = search ? search.toLowerCase() : "";
        const itemPrice = Number(item.price);
        const [minPrice, maxPrice] = priceRange;

        return (
            title.includes(searchLower) &&
            (category === "" || item.category === category) &&
            itemPrice >= minPrice &&
            itemPrice <= maxPrice
        );
    });

    const handleCategorySelect = (value) => {
        setCategory(value);
        setIsCategoryOpen(false);
    };

    const showModal = () => {
        setShow(true);
    };

    const contentStyle = {
        width: '250px',
        height: '300px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
    };

    const handleProductClick = (item) => {
        localStorage.setItem('selectedProduct', JSON.stringify(item));
    };

    return (
        <div>
            <div className="w-[100%]">
                <div className="flex justify-between text-[30px] mt-[5px] p-1.5 px-4 border-t-8 font-bold border-blue-500">
                    <img src={Case} alt="" className="w-12 h-12 max-sm:w-11 max-sm:h-11" />
                    <h1 className="text-[25px] font-normal p-[5.5px] max-sm:text-[20px] max-sm:p-2">
                        O'yin tuzilmalari:
                    </h1>
                    <NavLink className="ml-5" to="/stol-komputerlar">
                        <u className="text-[18px] text-blue-500 font-normal max-sm:text-[15px]">
                            Batafsil...
                        </u>
                    </NavLink>
                </div>
                <hr />
                <div className="w-[100%] grid md:grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] grid-cols-2 max-sm:grid max-sm:grid-cols-[repeat(auto-fit,_minmax(175px,_1fr))]">
                    {filteredBlog.length === 0 ? (
                        <SkeletonComp cards={5} />
                    ) : (
                        filteredBlog.map((item, index) => {
                            if (index < 20) {
                                return (
                                    <Fragment key={index}>
                                        <div className="h-[auto] max-sm:mb-[1.8%] my-1 mx-1 max-sm:my-1">
                                            <div className="border-[1px] max-sm:m-0 rounded max-sm:rounded ">
                                                <div className="h-[auto] max-sm:h-auto">
                                                    <div className="max-sm:w-[100%] max-sm:h-[250px] block relative h-[300px] rounded overflow-hidden">
                                                        <FaHeartCirclePlus onClick={() => handleLike(item)} className="text-white absolute text-end text-[22px] ml-[88%] bg-transparent m-1 hover:text-red-500 max-sm:text-[20px] max-sm:ml-[85%] max-sm:m-2" />
                                                        <NavLink
                                                            to="/batafsil"
                                                            onClick={() => handleProductClick(item)}
                                                        >
                                                            <img
                                                                alt="gallery"
                                                                className="p-0 inset-0 w-full h-[300px] object-cover object-center  max-sm:h-full max-sm:w-[100%]"
                                                                src={item.img}
                                                            />
                                                        </NavLink>
                                                    </div>
                                                    <div className="max-sm:w-[100%] p-5 h-auto max-sm:p-2">
                                                        <h3 className="text-gray-500 text-[10px] tracking-widest title-font mb-1  max-sm:text-[10px] max-sm:w-[130px]">
                                                            {item.category}
                                                        </h3>
                                                        <h2 className="text-gray-900 title-font w-[180px] font-medium max-sm:text-[14px] max-sm:w-[130%] max-sm:mb-[-5px]">
                                                            {item.title}
                                                        </h2>
                                                        <br />
                                                        <div className="flex justify-between">
                                                            <p className="max-sm:text-[18px] text-blue-500 text-[18px] mt-5 text h-auto font-bold">
                                                                {item.price} $
                                                            </p>
                                                            <NavLink to="/savat">
                                                                <b className="bg-blue-500 p-1 text-[15px] cursor-pointer rounded-md text-white mt-[20px]" onClick={() => handleCart(item)}>Sotib olish</b>
                                                            </NavLink>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Fragment>
                                );
                            }
                        })
                    )}
                </div>
            </div>
        </div>
    )
}

export default Second