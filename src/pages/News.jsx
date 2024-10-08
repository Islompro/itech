import { useEffect, useState } from "react";
import Footer from "./Footer"
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import SkeletonComp from "../components/Skeletion/Skeletion";



function News() {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    const data = collection(db, 'news');
    const unsubscribe = onSnapshot(data, (snapshot) => {
      const malumot = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
      }));
      setBlog(malumot);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <section className="text-gray-600 body-font w-[70%] m-auto max-sm:w-[98%]">
        <div className="container px-2 py-24 mx-auto max-sm:px-2 max-sm:py-4">
          <div className="flex flex-wrap w-full mb-20 max-sm:mb-2">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 max-sm:mb-0">Yangiliklar ro'yxati:</h1>
              <div className="h-1 w-20 bg-blue-500 rounded"></div>
            </div>
          </div>
          <div className="w-[100%] grid md:grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] grid-cols-2 max-sm:h-auto max-sm:grid max-sm:grid-cols-[repeat(auto-fit,_minmax(50%,_1fr))]">
            {blog.length === 0 ? (
              <SkeletonComp cards={6} />
            ) : (
              blog.map((data) => (
                <div className="p-4 max-sm:p-2">
                  <div className="bg-gray-100 p-6 max-sm:p-2 max-sm:py-[20px] rounded-lg h-auto max-sm:h-[420px]">
                    <img className="h-40 rounded w-full object-cover object-center mb-6 max-sm:h-[200px]" src={data.img} alt="content" />
                    <h3 className="tracking-widest text-indigo-500 text-[12px] font-medium title-font">YANGILIKLAR</h3>
                    <h2 className="text-[15px] text-gray-900 font-medium title-font mt-2 mb-3 max-sm:text-[13px]">{data.title}</h2>
                    <p className="leading-relaxed text-base overflow-y-scroll h-[110px] max-sm:h-[90px]">{data.matn}</p>
                  </div>
                </div>
              ))
            )
            }
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default News