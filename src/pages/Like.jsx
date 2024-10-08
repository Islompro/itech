import { Fragment, useEffect, useState } from "react";
import { FaHeartCircleMinus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import Footer from "./Footer";


function Like() {
  const [web, setWeb] = useState([]);

  useEffect(() => {
    const storedCards = JSON.parse(localStorage.getItem("like"));
    if (storedCards) {
      setWeb(storedCards);
      // calculateTotalCost(storedCards);
    }
  }, []);

  const calculateTotalCost = (cards) => {
    const totalCost = cards.reduce((acc, item) => acc + item.price * item.piece, 0);
    setCost(totalCost);
  };

  const handleDelete = (index) => {
    const updatedCards = web.filter((_, i) => i !== index);
    setWeb(updatedCards);
    localStorage.setItem("like", JSON.stringify(updatedCards));
    calculateTotalCost(updatedCards);
    // window.location.reload();
  };

  return (
    <div>
      <section className="text-gray-600 body-font w-[70%] m-auto max-sm:w-[98%]">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Sevimlilar ro'yxati:</h1>
              <div className="h-1 w-20 bg-blue-500 rounded"></div>
            </div>
          </div>
          <div className="grid grid-cols-3 max-sm:grid-cols-1 max-lg:grid-cols-2">
            {web.length > 0 ? web.map((data, index) => (
              <Fragment key={index}>
                <div className="xl:w-[90%] 2xl:w-[100%] md:w-[85%] p-4">
                  <div className="bg-gray-100 p-6 rounded-lg">
                    <img className="h-[250px] xl:h-[200px] rounded w-full object-cover object-center mb-2" src={data.img} alt="content" />
                    <h3 className="tracking-widest text-indigo-500 text-[11px] font-medium title-font">{data.category}</h3>
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{data.name}</h2>
                    <p className="leading-relaxed text-base h-24 overflow-y-scroll">{data.matn}</p>
                    <hr className="mt-3 border-gray-300" />
                    <FaHeartCircleMinus onClick={() => handleDelete(index)} className="text-red-500 flex justify-center w-[100%] text-[20px] bg-transparent mt-2 hover:text-blue-500" />
                  </div>
                </div>
              </Fragment>
            )) : (
              <div className="p-[40px] m-auto">
                <img src="https://firebasestorage.googleapis.com/v0/b/storege1-8ddbe.appspot.com/o/user%2Flike.png?alt=media&token=3c503970-e095-4b7a-b39a-5935dc6bb407" alt="Empty Cart" />
                <pre className="text-center text-blue-600">Sevimlilar topilmadi...</pre>
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Like