import React, { useState, useEffect } from "react";
import { Carousel, notification } from "antd";
import Footer from "./Footer";
import NOT from "../img/empty.png"
import { NavLink } from "react-router-dom";

function Shopmodal1({ count, setCount }) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetching product data from localStorage
    const storedProduct = localStorage.getItem("selectedProduct");
    if (storedProduct) {
      setProduct(JSON.parse(storedProduct));
    }

    // Cleanup function to clear localStorage when component unmounts
    return () => {
      localStorage.removeItem("selectedProduct");
    };
  }, []);

  // Return early if product data is not yet loaded
  if (!product) {
    return (
      <div>
        <div className="mb-10 max-sm:max-w-[98%] max-sm:m-auto max-sm:mb-16">
          <div className="flex justify-center">
            <img src={NOT} alt="" />
          </div>
          <div className="text-center">
            <h1 className="text-[25px] font-thin mb-3 max-sm:text-[20px]">Hali hech qaysi mahsulotni belgilamadingiz</h1>
            <p className="font-thin max-sm:text-[15px]"><font className="text-blue-400 font-bold">Iltimos !</font> Qaytadan urinib ko'ring...</p>
            <u className="text-blue-400 font">
              <NavLink to="/" className="">qaytish</NavLink>
            </u>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  const contentStyle = {
    width: "600px",
    height: "500px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  const handleCart = (dataCard) => {
    let data = localStorage.getItem("cards");

    if (data) {
      data = JSON.parse(data);
    } else {
      data = [];
    }
    const existingItem = data.find((item) => item.id === dataCard.id);
    if (existingItem) {
      existingItem.piece += 1;
      existingItem.price += Number(dataCard.price);
    } else {
      data.push({
        name: dataCard.title,
        img: dataCard.img,
        price: Number(dataCard.price),
        matn: dataCard.matn,
        piece: 1,
        id: dataCard.id,
      });
    }
    localStorage.setItem("cards", JSON.stringify(data));

    notification.success({
      // 'notification.success' to'g'irlandi
      message: "Savatga qo'shildi !",
      description:
        "Tanlagan mahsulotingiz savatga qo'shildi. Savatga o'tib buyurtma berishingiz mumkin !",
    });

    setCount(prevCount => prevCount + 1);
  };

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


  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden py-10">
        <div className="container max-w-[70%] m-auto flex gap-10 max-sm:block max-sm:max-w-[98%]">
          <div className="w-[600px] max-sm:w-[100%]">
            <Carousel autoplay>
              <div>
                <img
                  style={contentStyle}
                  alt={product.name}
                  src={product.img}
                />
              </div>
              <div>
                <img
                  style={contentStyle}
                  alt={product.name}
                  src={product.img1}
                />
              </div>
              <div>
                <img
                  style={contentStyle}
                  alt={product.name}
                  src={product.img2}
                />
              </div>
            </Carousel>
          </div>
          <div className="lg:w-4/5 mx-auto flex my-auto flex-wrap">
            <div className="lg:w-1/1 lg:px-6 mt-6 lg:mt-0 max-sm:p-4">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {product.category}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {product.title}
              </h1>
              <div className="flex mb-6"></div>
              <p className="leading-relaxed">{product.matn}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
              <div className="flex mt-[50px]">

                <span className="title-font font-medium text-3xl text-blue-500 max-sm:text-[21px] max-md:text-[10px]">
                  {product.price}$
                </span>
                <div className="mx-1 text-red-500 mt-[-15px] text-[15px] max-sm:text-[15px]">
                  <del>{product.oldprice}$</del>
                  <b className="bg-blue-500 text-white p-1 rounded-md py-1 text-[15px] ml-2 max-sm:text-[15px]">{product.sale} %</b>
                </div>
                <button onClick={() => handleCart(product)} class="flex ml-auto text-white bg-blue-500 border-0 py-2 px-3 focus:outline-none hover:bg-blue-600 rounded max-sm:px-[5px] max-sm:text-[15px] max-sm:py-2">
                  <NavLink to="/savat">Savatga</NavLink>
                </button>
                <button onClick={() => handleLike(product)} className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4 hover:text-red-500 max-sm:w-9 max-sm:h-9">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Shopmodal1;
