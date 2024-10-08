import React, { useState, useEffect, Fragment } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { TbBasketPlus } from "react-icons/tb";
import Footer from "./Footer";
import { notification } from "antd";
import { LuSearchCode } from "react-icons/lu";
import SkeletonComp from "../components/Skeletion/Skeletion";
import { LuPcCase } from "react-icons/lu";
import {
  PiMouseMiddleClickLight,
  PiRugLight,
  PiSealPercent,
} from "react-icons/pi";
import { IoFilterSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { TiGroup } from "react-icons/ti";
import { GiHeadphones, GiLaptop, GiOldMicrophone } from "react-icons/gi";
import { BsKeyboard } from "react-icons/bs";
import { BiHeadphone } from "react-icons/bi";
import CEO from "../img/itech2.png";
import Stock from "../img/stock.png";
import Second from "./Second";
import Carousel from "./Carousel"
import { FaHeartCirclePlus } from "react-icons/fa6";
import Katalog1 from "./Katalog1";
import { FaChevronDown } from "react-icons/fa";
import Katalog from "./Katalog";


function Blog({ count, setCount }) {
  const [blog, setBlog] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
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

    return (
      title.includes(searchLower) &&
      (category === "" || item.category === category) &&
      itemPrice
    );
  });

  const handleCategorySelect = (value) => {
    setCategory(value);
    setIsCategoryOpen(false);
  };

  const showModal = () => {
    setShow(true);
  };


  const handleProductClick = (item) => {
    localStorage.setItem("selectedProduct", JSON.stringify(item));
  };

  return (
    <div className="bg-white">
      <section className="text-gray-600 body-font overflow-hidden max-w-[70%] m-auto max-sm:max-w-[98%]">
        <div className="container mx-auto">
          <div className="flex flex-col text-center w-full">
            <div className="flex justify-center max-sm:block">
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
              <input
                type="search"
                className="max-sm:w-[100%] max-sm:mb-3 w-[100%] border-[1.7px] border-blue-500 text-blue-500 bg-white h-10 px-4 pr-3 rounded-lg text-sm focus:outline-none"
                placeholder="Mahsulotlarni qidiring..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          <NavLink to="/yangiliklar">
            <div className="mt-5">
              <Carousel />
            </div>
          </NavLink>


          <div className="flex">

            <Katalog1 />

            <div className="w-[100%]">
              <div className="flex justify-between text-[30px] mt-[5px] p-1.5 px-4 border-t-8 font-bold border-blue-500">
                <img src={Stock} alt="" className="w-12 h-12 max-sm:w-11 max-sm:h-11" />
                <h1 className="text-[25px] font-normal p-[5.5px] max-sm:text-[18px] max-sm:p-2">
                  Chegirmali mahsulotlar:
                </h1>
                <NavLink className="" to="/maxsus">
                  <u className="text-[18px] text-blue-500 font-normal max-sm:text-[15px]">
                    Batafsil...
                  </u>
                </NavLink>
              </div>
              <hr />

              <div className="w-[100%] grid md:grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] grid-cols-2 max-sm:grid max-sm:grid-cols-[repeat(auto-fit,_minmax(50%,_1fr))]">
                {filteredBlog.length === 0 ? (
                  <SkeletonComp cards={5} />
                ) : (
                  filteredBlog.map((item, index) => {
                    if (index < 10) {
                      return (
                        <Fragment key={index}>
                          <div className="h-[auto] max-sm:mb-[0%] my-5 mx-1 max-sm:mx-[3.5px] max-sm:my-1">
                            <div className="border-[1px] max-sm:m-0 rounded max-sm:rounded">
                              <div className=" h-[auto] max-sm:h-[auto]">
                                <div className=" max-sm:h-[250px] block relative h-[300px] rounded overflow-hidden">
                                  <FaHeartCirclePlus onClick={() => handleLike(item)} className="text-white absolute text-end text-[22px] ml-[88%] bg-transparent m-1 hover:text-red-500 max-sm:text-[20px] max-sm:ml-[85%] max-sm:m-2" />
                                  <NavLink
                                    to="/chegirmalik"
                                    onClick={() => handleProductClick(item)}
                                  >
                                    <img
                                      alt="gallery"
                                      className="p-0 inset-0 max-sm:w-[100%] w-[100%] h-[300px] object-cover object-center  max-sm:h-full "
                                      src={item.img}
                                    />
                                  </NavLink>
                                </div>
                                <div className="p-5 h-auto max-sm:p-2">
                                  <h3 className="text-gray-500 text-[10px] tracking-widest title-font mb-1  max-sm:text-[10px] max-sm:w-[130px]">
                                    {item.category}
                                  </h3>
                                  <h2 className="text-gray-900 title-font w-[180px] font-medium max-sm:text-[14px] max-sm:w-[130%] max-sm:mb-[-5px]">
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
                      );
                    }
                  })
                )}
              </div>


              <div>
                <Second count={count} setCount={setCount} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-[2px] border-black">
        <marquee behavior="scroll" direction="right" scrollamount="10">
          <div className="w-full flex gap-10">
            <img className="h-[100px] p-4 bg-black" src={CEO} alt="" />
            {/* Add more logos as needed */}
          </div>
        </marquee>
      </div>
      <Footer />
    </div>
  );
}

export default Blog;
