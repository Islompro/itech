import './Footer.css';
import ITECH from "../img/itec.png";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';


function Footer() {
    return (
        <div className='footer'>
            <footer className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                        <NavLink to="/adminpanel" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                            <img src={ITECH} alt="" className='bg-black w-[150px] h-[50px] m-5' />
                        </NavLink>
                        <p className="mt-2 text-sm text-gray-500">ITECH COMPUTERS <font className="text-black font-bold font-san">24/7</font> ishlaydi !</p>
                    </div>
                    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-black tracking-widest text-sm mb-3">Ma'lumot</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <NavLink to="/contact-jizzax" className="text-gray-600 hover:text-gray-800">Kompaniya haqida</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contact-jizzax" className="text-gray-600 hover:text-gray-800">Bog'lanish uchun ma'lumot</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contact-jizzax" className="text-gray-600 hover:text-gray-800">Bizning do'konlarimiz</NavLink>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-black tracking-widest text-sm mb-3">Xaridorlar uchun</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <NavLink to="/maxsus" className="text-gray-600 hover:text-gray-800">Aksiyalar</NavLink>
                                </li>
                                <li>
                                    <NavLink to="yangiliklar" className="text-gray-600 hover:text-gray-800">Yangiliklar</NavLink>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-black tracking-widest text-sm mb-3">Biz to'lovni qabul qilamiz</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Naqd pul</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">UzumNasiya</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">UzumBank</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">UzCard</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Humo</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">PayMe</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Click</a>
                                </li>
                                
                                
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-black tracking-widest text-sm mb-3">Biz ijtimoiy tarmoqlardamiz</h2>
                            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                                <a href='https://t.me/optomkompyutersavdosi' target="_blank" className="text-blue-500 text-[25px]">
                                    <FaTelegramPlane />
                                </a>
                                <a href='https://instagram.com/itech__computers' target="_blank" className="ml-3 text-blue-500 text-[25px]">
                                    <FaInstagram />
                                </a>
                                <a href='https://www.youtube.com/@uzbitechcomputers' target="_blank" className="ml-3 text-blue-500 text-[25px]">
                                    <FaYoutube />
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="bg-black">
                    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p className="text-white text-sm text-center sm:text-left">© 2024 Itech Computers
                            creator —
                            <a href="https://t.me/islomqodirov579" rel="noopener noreferrer" className="text-yellow-4  00 ml-1" target="_blank">DEVELOPER</a>
                        </p>
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                            <a href='https://t.me/optomkompyutersavdosi' target="_blank" className="text-white text-[25px]">
                                <FaTelegramPlane />
                            </a>
                            <a href='https://instagram.com/itech__computers' target="_blank" className="ml-3 text-white text-[25px]">
                                <FaInstagram />
                            </a>
                            <a href='https://www.youtube.com/@uzbitechcomputers' target="_blank" className="ml-3 text-white text-[25px]">
                                <FaYoutube />
                            </a>
                        </span>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer