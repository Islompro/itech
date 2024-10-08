import { Fragment, useEffect, useState } from "react";
import SkeletonComp from "../components/Skeletion/Skeletion";
import { TbBasketPlus } from "react-icons/tb";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { notification } from "antd";
import { PiSealPercent } from "react-icons/pi";
import Footer from "./Footer";
import { Carousel } from 'antd';
import { NavLink } from "react-router-dom";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";
import Katalog from "./Katalog";


function Specials({ cout, setCount }) {
    const [blog, setBlog] = useState([]);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");
    const [priceRange, setPriceRange] = useState([0, 5000]);
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const [show, setShow] = useState(false);


    useEffect(() => {
        const fetchData = async () => {
            const dataRef = collection(db, "maxsus");
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

    const closeModal = () => {
        setShow(false);
    };

    const contentStyle = {
        width: '100%',
        height: '300px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        border: '1px solid',
    };

    const handleProductClick = (item) => {
        localStorage.setItem('selectedProduct', JSON.stringify(item));
    };

    return (
        <div>
            <div className="bg-white max-w-[70%] m-auto max-sm:max-w-[95%]">
                <div>
                    <div className="flex flex-col text-center w-full">
                        <div className="max-sm:inline-block">
                            <button
                                className="w-[100%] flex justify-between px-5 bg-blue-500 text-white p-1 rounded-md my-1 md:hidden lg:hidden"
                                onClick={() => setIsCategoryOpen(!isCategoryOpen)} // Toggle menu visibility
                            >
                                <p>Kataloglar</p>
                                <FaChevronDown className="mt-1" />
                            </button>

                            {isCategoryOpen && ( // Conditional rendering based on state
                                <Katalog />
                            )}
                            <div className="flex justify-center">
                                <input
                                    type="search"
                                    className="max-sm:w-[90%] max-sm:mb-3 w-[100%] border-[1.7px] border-blue-500 text-blue-500 bg-white h-10 px-4 pr-3 rounded-lg text-sm focus:outline-none"
                                    placeholder="Mahsulotlarni qidiring..."
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                                {show ? (
                                    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
                                        <div className="bg-white p-8 rounded-lg flex flex-col max-w-md relative max-sm:max-w-[95%]">
                                            <h2 className="text-2xl font-bold">
                                                <h1><font className="text-red-500 font-normal text-[18px] max-sm:text-[25px]">Filter</font></h1>
                                                <p className="text-blue-500 font-thin max-sm:text-[21px]">O'zingizda kerak bo'lgan narxni tanlang...</p>
                                            </h2>
                                            <div className="relative z-50">
                                                <div className="flex px-8 flex-col items-center mt-[20px]">
                                                    <input
                                                        type="range"
                                                        min="0"
                                                        max="5000"
                                                        value={priceRange[0]}
                                                        onChange={(e) =>
                                                            setPriceRange([Number(e.target.value), priceRange[1]])
                                                        }
                                                        className="max-sm:w-[70%] border-[1.7px] border-blue-600 text-blue-500 bg-white h-10 px-3 rounded-lg text-sm focus:outline-none"
                                                    />
                                                    <input
                                                        type="range"
                                                        min="10"
                                                        max="5000"
                                                        value={priceRange[1]}
                                                        onChange={(e) =>
                                                            setPriceRange([priceRange[0], Number(e.target.value)])
                                                        }
                                                        className="max-sm:w-[70%] border-[1.7px] border-blue-600 text-blue-500 bg-white h-10 px-3 rounded-lg text-sm focus:outline-none"
                                                    />
                                                </div>
                                                <div className="flex flex-col gap-2 mt-4 w-[100%]">
                                                    <span>Minimal narx: <font className="text-red-500">{priceRange[0]} $</font></span>
                                                    <span>Maksimal narx: <font className="text-blue-500">{priceRange[1]} $</font></span>
                                                </div>
                                            </div>
                                            <div className="flex justify-end mt-3 m-auto max-sm:mt-10">
                                                <button className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded max-sm:text-[15px] max-sm:px-4" onClick={closeModal}>Yopish</button>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <HiAdjustmentsHorizontal onClick={showModal} className="text-[30px] h-10 mx-3 text-blue-500 cursor-pointer" />
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="flex">
                        <PiSealPercent className="text-blue-500 text-[35px] mt-2.5" to="/about" />
                        <h1 className="text-[28px] font-normal p-1.5 max-sm:text-[20px] max-sm:p-3">Chegirmali mahsulotlar:</h1>
                    </div>

                    <div className="w-[100%]  grid md:grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] grid-cols-2 max-sm:grid max-sm:grid-cols-[repeat(auto-fit,_minmax(50%,_1fr))]">
                        {filteredBlog.length === 0 ? (
                            <SkeletonComp cards={6} />
                        ) : (
                            filteredBlog.map((item, index) => (
                                <Fragment key={index}>
                                    <div className="h-[auto] max-sm:mb-[1.8%] my-5">
                                        <div className="border-[1px] max-sm:m-0 rounded max-sm:rounded">
                                            <div className="max-sm:w-[100%] h-[auto] max-sm:h-[auto]">
                                                <div className=" max-sm:h-[300px] block relative h-[300px] rounded overflow-hidden">
                                                    <NavLink to="/chegirmalik" onClick={() => handleProductClick(item)}>
                                                        <Carousel autoplay>
                                                            <div>
                                                                <img
                                                                    style={contentStyle}
                                                                    alt="gallery"
                                                                    src={item.img}
                                                                />
                                                            </div>
                                                            <div>
                                                                <img
                                                                    style={contentStyle}
                                                                    alt="gallery"
                                                                    src={item.img1}
                                                                />
                                                            </div>
                                                            <div>
                                                                <img
                                                                    style={contentStyle}
                                                                    alt="gallery"
                                                                    src={item.img2}
                                                                />
                                                            </div>
                                                        </Carousel>
                                                    </NavLink>
                                                </div>
                                                <div className="p-5 h-auto max-sm:p-2">
                                                    <h3 className="text-gray-500 text-[10px] tracking-widest title-font mb-1  max-sm:text-[10px] max-sm:w-[130px]">
                                                        {item.category}
                                                    </h3>
                                                    <h2 className="text-gray-900 title-font w-[180px] font-medium max-sm:text-[14px] max-sm:w-[100%] max-sm:mb-[-5px]">
                                                        {item.title}
                                                    </h2>
                                                    <br />
                                                    <div className="flex w-10">
                                                        <del className="text-gray-500 w-[200px] mr-1 p-1 max-sm:text-[15px]">
                                                            {item.oldprice}
                                                        </del>
                                                        <p className="text-white bg-blue-600 p-1 rounded max-sm:text-[11px] max-sm:py-[2px] max-sm:h-[20px]">
                                                            {item.sale}%
                                                        </p>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <p className="max-sm:text-[18px] text-blue-500 text-[18px] mt-5 text h-auto font-bold">
                                                            {item.price} $
                                                        </p>

                                                        <b className="bg-blue-500 p-1 text-[15px] cursor-pointer rounded-md text-white mt-[20px]" onClick={() => handleCart(item)}><NavLink to="/savat">Sotib olish</NavLink></b>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Fragment>
                            ))
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Specials;
