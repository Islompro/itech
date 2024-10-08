import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import Logo1 from '../img/itech2.png';
import CEO from '../img/itech2.png';
import Botir from '../img/botir.png';
import Xolbek from '../img/xolbek.png';
import Jamshid from '../img/D.jpg';
import Hurshid from '../img/hurshid.jpg';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { IoLogoInstagram } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
import { HiDevicePhoneMobile } from "react-icons/hi2";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { NavLink } from 'react-router-dom';




function About() {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    let data = collection(db, 'aboutcrud')


    onSnapshot(
      data, (snapshot) => {
        let malumot = [];

        snapshot.docs.forEach((doc) => {
          malumot.push({ ...doc.data(), id: doc.id })
        });
        setBlog(malumot);
      }
    )
  }, []);


  return (
    <div className='bg-white'>
      <section className="text-gray-600 body-font">
        <div className=" container px-5 py-24 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-28 h-28 rounded-full inline-flex items-center justify-center bg-black text-gray-400">
                  <img src={Logo1} alt="" className='ml-1.5' />
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-black title-font mt-4 text-gray-900 text-lg">ITECH COMPUTERS</h2>
                  <div className="w-12 h-1 bg-black rounded mt-2 mb-4"></div>
                  <p className="text-base">💻 Barcha kompyuterlar eng arzon va optom narxda xarid qiling ✅</p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-lg mb-4">iTECH COMPUTERS do'koni ochilganiga 1 yil bo'lmasdan, 2000+ mijozlarni hursand qilgan. Hozirgi kunda ham shu raqamlarga har oyda 200+ mijozlar qo'shilmoqda. Doimiy mijozlar soni esa 300 dan ziyot. Bu raqamlar o'zidan-o'zi bo'lgan emas. Mijozlarni iTech haqidagi fikri ham juda ijobiy. Chunki, mahsulotdagi sifat va narx ularni har doim hursand qilib keladi. iTech Computers jamoasini maqsadi har bir mijozlarni sifatli va hamyonbop mahsulot bilan tanimlash. Siz ham bizning mijozlarimiz safida bo'ling.</p>
                <NavLink to="/contact-jizzax" className="text-indigo-500 inline-flex items-center">Batafsil ma'lumot
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                    <p className="leading-relaxed text-lg mb-4">iTECH COMPUTERS do'koni ochilganiga 1 yil bo'lmasdan, 2000+ mijozlarni hursand qilgan.</p>
                  </svg>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container w-[70%] py-24 mx-auto max-sm:w-[98%]">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"><font className="text-blue-500">ITEC COMPUTERS</font> do'konini <font className="text-red-500">YouTube</font> orqali kuzating ?</h1>
          </div>
          <div className="flex flex-wrap -mx-1 -mb-10 text-center">
            <div className="w-[50%] m-auto mb-10 px-10 max-sm:px-2 max-sm:w-[98%]">
              <div className="rounded-lg h-[300px] overflow-hidden">
                <iframe className='object-cover object-center h-[100%] w-full' src="https://www.youtube.com/embed/py5dugDLzX0?si=doWPe-3PJdiCeAWI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clints */}

      <section className="text-gray-600 body-font">
        <div className="container px-0 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="max-sm:px-[30px] sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">ITECH COMPUTERS online do'konidan narsa sotib olganlar !</h1>
            <p className="max-sm:m-auto w-[80%] lg:w-2/3 mx-auto leading-relaxed text-base">Siz ham bizdan sotib oling !</p>
          </div>
          <div className="flex flex-wrap -m-[-1%]">
            {blog.map((data) => (
              <div className="h-[500px] m-auto mb-[-100px]" key={data.id}>
                <div className="flex flex-wrap">
                  <div className="lg:w-1/4 md:w-1/2 p-4">
                    <div className="max-sm:w-[320px] block relative h-[350px] w-[350px] rounded overflow-hidden">
                      <img alt="gallery" className="p-0 absolute inset-0 w-full h-full object-cover object-center border-[2px] border-blue-500 rounded-xl" src={data.img} />
                      <div className="h-[350px] w-[350px] px-8 py-5 relative z-10 border-[1px] border-blue-500 rounded-xl bg-white opacity-0 hover:opacity-100  active:opacity-100">
                        <div className='flex flex-wrap'>
                          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{data.title}</h1>
                          <p className="leading-relaxed">{data.matn}</p>
                          <span className="inline-flex text-[22px] mt-3">
                            <a className="text-gray-500" href={'https://instagram.com/' + data.instagram}>
                              <IoLogoInstagram />
                            </a>
                            <a className="ml-2 text-gray-500" href={'https://t.me/' + data.telegram}>
                              <FaTelegramPlane />
                            </a>
                            <a className="ml-2 text-gray-500" href={'https://phone' + data.phonenumber}>
                              <HiDevicePhoneMobile />
                            </a>
                          </span>
                        </div>
                      </div>
                      <img alt="ecommerce" className="object-cover object-center w-[550px] h-[300px] " src={data.img} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OurTeam */}

      <section className="bg-white dark:bg-gray-900">
        <div className=" py-8 px-4 mx-auto max-w-[70%] text-center lg:py-16 lg:px-6">
          <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Bizning jamoamiz</h2>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">iTech Computers jamoasi bilan tanishing !</p>
          </div>
          <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="text-center text-gray-500 dark:text-gray-400">
              <img className="mx-auto mb-4 w-36 h-36 rounded-full" src={Jamshid} alt="Joseph Avatar" />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Jamshid Fayzimurodovic</a>
              </h3>
              <p>iTech Direktor</p>
              <ul className="flex justify-center mt-4 space-x-4">
                <li>
                  <a href="https://www.instagram.com/jamshid__fayzimurodovich" target="_blank" className="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
                    <FaInstagramSquare className='text-[30px]' />
                  </a>
                </li>
                <li>
                  <a href="https://t.me/Jamshid_fayzimurodovic" target="_blank" className="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
                    <FaTelegram className='text-[30px]' />
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-center text-gray-500 dark:text-gray-400">
              <img className="mx-auto mb-4 w-36 h-36 rounded-full" src={Hurshid} alt="Jese Avatar" />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Hurshid Gulmurodov</a>
              </h3>
              <p>Menejer - Dasturchi</p>
              <ul className="flex justify-center mt-4 space-x-4">
                <li>
                  <a href="https://www.instagram.com/hurshid_itech" target="_blank" className="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
                    <FaInstagramSquare className='text-[30px]' />
                  </a>
                </li>
                <li>
                  <a href="https://t.me/hurshid0203" target="_blank" className="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
                    <FaTelegram className='text-[30px]' />
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-center text-gray-500 dark:text-gray-400">
              <img className="mx-auto mb-4 w-36 h-36 rounded-full" src={Botir} alt="Helene Avatar" />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Donaboyev Botir</a>
              </h3>
              <p>Operator-1</p>
              <ul className="flex justify-center mt-4 space-x-4">
                <li>
                  <a href="https://instagram.com/itech__computers" target="_blank" className="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
                    <FaInstagramSquare className='text-[30px]' />
                  </a>
                </li>
                <li>
                  <a href="https://t.me/itech_adm" target="_blank" className="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
                    <FaTelegram className='text-[30px]' />
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-center text-gray-500 dark:text-gray-400">
              <img className="mx-auto mb-4 w-36 h-36 rounded-full" src={Xolbek} alt="Bonnie Avatar" />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">O'rinboyev Eshonqul</a>
              </h3>
              <p>Operator-2</p>
              <ul className="flex justify-center mt-4 space-x-4">
                <li>
                  <a href="https://instagram.com/itech__computers" target="_blank" className="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
                    <FaInstagramSquare className='text-[30px]' />
                  </a>
                </li>
                <li>
                  <a href="https://t.me/m_xlsp" target="_blank" className="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
                    <FaTelegram className='text-[30px]' />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">Mijozlarimiz biz haqimizda qanday fikrda !</h1>
          <div className="flex flex-wrap -m-4 px-[7%]">
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-100 p-8 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p className="leading-relaxed mb-6">Men iTech Computers do'konini anchadan buyon kuzatar edim. Keyin iTech Computers do'konidan yangi o'yin uchun komputers yig'dirdim. iTech Computers do'koni menga yoqqan komputer jamlanmasini yi'g'ib berdi. Eng muhimi hamyonbop va sifatli. Sizlarga ham tavsiya beraman. </p>
                <a className="inline-flex items-center">
                  <img alt="testimonial" src="https://firebasestorage.googleapis.com/v0/b/itec-b1be9.appspot.com/o/user%2Fphoto_2024-05-14_23-03-31.jpg?alt=media&token=60f53915-ff6e-4c73-b024-0d3fcb9b0a91" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">SANJAR JORAQULOV</span>
                    <span className="text-gray-500 text-sm">O'QITUVCHI</span>
                  </span>
                </a>
              </div>
            </div>
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-100 p-8 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p className="leading-relaxed mb-6">Men iTech Computers do'konidan o'yin uchun komputer sotib oldim. Nega aynan iTech Computers, chunki narxlar arzon va juda ham sifatli. Eng muhimi 1 yil garantiyasi ham bor. Hammaga iTech Computers do'konini tavsiya qilamaqn.</p>
                <a className="inline-flex items-center">
                  <img alt="testimonial" src="https://firebasestorage.googleapis.com/v0/b/itec-b1be9.appspot.com/o/user%2Fphoto_2024-01-18_06-32-33.jpg?alt=media&token=1ed3fd14-3381-4c97-b3fb-e7d4b5fea678" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">Islom Qodirov</span>
                    <span className="text-gray-500 text-sm">DASTURCHI</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default About;
