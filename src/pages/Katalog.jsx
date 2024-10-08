import { NavLink } from "react-router-dom"

import Stock from "../img/stock.png";
import Case from "../img/case.png";
import Laptop1 from "../img/laptop.png";
import Keyboard from "../img/keyboard.png";
import Mouse from "../img/mouse.png";
import Earphone from "../img/earphone.png";
import Microphone from "../img/micra.png";
import Covrek from "../img/covrek.jpg";
import Accessory from "../img/accessory.png";
import Dekor from "../img/dekor.png";
import Collection from "../img/collection.png";
import Screen from "../img/screen.png";
import Merory from "../img/merory.png";
import RAM from "../img/ram.png";
import UPS from "../img/usb.png";
import Energy from "../img/energy.png";
import Kalonka from "../img/kalonka.png";
import Camera from "../img/camera.png";
import Apple from "../img/apple.png";
import Games from "../img/games.png";
import Game from "../img/game.png";
import Glasses from "../img/glasses.png";
import Wifi from "../img/wifi.png";
import Culler from "../img/culler.png";
import Home from "../img/home.png";
import Armchair from "../img/armchair.png";
import Table from "../img/table.png";
import AKSIYA from "../img/aksiya.png"
import News from "../img/news.png";


function Katalog() {
    return (
        <div className="mt-1 w-[350px] border-[1px] rounded-lg shadow-lg z-10 max-sm:block max-sm:my-2 max-sm:w-[100%]">
            <div className="text-[30px] p-2 border-t-8 font-bold border-blue-500">
                <h1 className="ml-2 text-blue-500">Kataloglar</h1>
            </div>
            <hr />
            <ul className="m-auto text-white text-[22px] font-medium ">
                <li>
                    <NavLink className="flex px-4 py-2" to="/maxsus">
                        <img src={Stock} alt="" className="w-8 h-8 mr-2" />
                        <pre className="text-black text-[20px] p-1 hover:text-blue-500">
                            Chegirmalar
                        </pre>
                    </NavLink>
                    <hr />
                </li>
                <li>
                    <NavLink className="flex px-4 py-2" to="/stol-komputerlar">
                        <img src={Case} alt="" className="w-8 h-8 mr-2" />
                        <pre className="text-black text-[20px] p-1 hover:text-blue-500">
                            O'yin tuzilmalari
                        </pre>
                    </NavLink>
                    <hr />
                </li>
                <li>
                    <NavLink className="flex px-4 py-2" to="/noutbuklar">
                        <img src={Laptop1} alt="" className="w-8 h-8 mr-2" />
                        <pre className="text-black text-[20px] p-1 hover:text-blue-500">Noutbuklar</pre>
                    </NavLink>
                    <hr />
                </li>
                <li>
                    <NavLink className="flex px-4 py-2" to="/klaviaturalar">
                        <img src={Keyboard} alt="" className="w-8 h-8 mr-2" />
                        <pre className="text-black text-[20px] p-1 hover:text-blue-500">
                            Klaviaturalar
                        </pre>
                    </NavLink>
                    <hr />
                </li>
                <li>
                    <NavLink className="flex px-4 py-2" to="/sichqonchalar">
                        <img src={Mouse} alt="" className="w-8 h-8 mr-2" />
                        <pre className="text-black text-[20px] p-1 hover:text-blue-500">
                            Sichqonchalar
                        </pre>
                    </NavLink>
                    <hr />
                </li>
                <li>
                    <NavLink className="flex px-4 py-2" to="/quloqchinlar">
                        <img src={Earphone} alt="" className="w-8 h-8 mr-2" />
                        <pre className="text-black text-[20px] p-1 hover:text-blue-500">
                            Quloqchinlar
                        </pre>
                    </NavLink>
                    <hr />
                </li>
                <li>
                    <NavLink className="flex px-4 py-2" to="/mikrofonlar">
                        <img src={Microphone} alt="" className="w-8 h-8 mr-2" />
                        <pre className="text-black text-[20px] p-1 hover:text-blue-500">
                            Mikrofonlar
                        </pre>
                    </NavLink>
                    <hr />
                </li>
                <li>
                    <NavLink className="flex px-4 py-2" to="/kovreklar">
                        <img src={Covrek} alt="" className="w-8 h-8 mr-2" />
                        <pre className="text-black text-[20px] p-1 hover:text-blue-500">Kovreklar</pre>
                    </NavLink>
                    <hr />
                </li>
                <li>
                    <NavLink className="flex px-4 py-2" to="/aksessuarlar">
                        <img src={Accessory} alt="" className="w-8 h-8 mr-2" />
                        <pre className="text-black text-[20px] p-1 hover:text-blue-500">
                            Aksessuarlar
                        </pre>
                    </NavLink>
                    <hr />
                </li>
                <li>
                    <NavLink className="flex px-4 py-2" to="/dekor">
                        <img src={Dekor} alt="" className="w-8 h-8 mr-2" />
                        <pre className="text-black text-[20px] p-1 hover:text-blue-500">
                            Dekor
                        </pre>
                    </NavLink>
                    <hr />
                </li>
                <li>
                    <NavLink className="flex px-4 py-2" to="/to'plamlar">
                        <img src={Collection} alt="" className="w-8 h-8 mr-2" />
                        <pre className="text-black text-[20px] p-1 hover:text-blue-500">
                            To'plamlar
                        </pre>
                    </NavLink>
                    <hr />
                </li>
                <li>
                    <NavLink className="flex px-4 py-2" to="/monitorlar">
                        <img src={Screen} alt="" className="w-8 h-8 mr-2" />
                        <pre className="text-black text-[20px] p-1 hover:text-blue-500">
                            Monitorlar
                        </pre>
                    </NavLink>
                    <hr />
                </li>
                <li>
                    <NavLink className="flex px-4 py-2" to="/drayvlar">
                        <img src={Merory} alt="" className="w-8 h-8 mr-2" />
                        <pre className="text-black text-[20px] p-1 hover:text-blue-500">
                            Drayvlar
                        </pre>
                    </NavLink>
                    <hr />
                </li>
                <li>
                    <NavLink className="flex px-4 py-2" to="/operativkalar">
                        <img src={RAM} alt="" className="w-8 h-8 mr-2" />
                        <pre className="text-black text-[20px] p-1 hover:text-blue-500">
                            RAM
                        </pre>
                    </NavLink>
                    <hr />
                </li>
                <li>
                    <NavLink className="flex px-4 py-2" to="/upslar">
                        <img src={UPS} alt="" className="w-8 h-8 mr-2" />
                        <pre className="text-black text-[20px] p-1 hover:text-blue-500">
                            UPS
                        </pre>
                    </NavLink>
                    <hr />
                </li>
                <li>
                    <NavLink className="flex px-4 py-2" to="/bplar">
                        <img src={Energy} alt="" className="w-8 h-8 mr-2" />
                        <pre className="text-black text-[20px] p-1 hover:text-blue-500">
                            Quvvat manbalari
                        </pre>
                    </NavLink>
                    <hr />
                </li>
                <li>
                    <NavLink className="flex px-4 py-2" to="/kalonkalar">
                        <img src={Kalonka} alt="" className="w-8 h-8 mr-2" />
                        <pre className="text-black text-[20px] p-1 hover:text-blue-500">
                            Kalonkalar
                        </pre>
                    </NavLink>
                    <hr />
                </li>
                <li>
                    <NavLink className="flex px-4 py-2" to="/web-cameralar">
                        <img src={Camera} alt="" className="w-8 h-8 mr-2" />
                        <pre className="text-black text-[20px] p-1 hover:text-blue-500">
                            Web-kameralar
                        </pre>
                    </NavLink>
                    <hr />
                </li>
                <li>
                    <NavLink className="flex px-4 py-2" to="/apple">
                        <img src={Apple} alt="" className="w-8 h-8 mr-2" />
                        <pre className="text-black text-[20px] p-1 hover:text-blue-500">
                            Apple mahsulotlari
                        </pre>
                    </NavLink>
                    <hr />
                </li>
                <li>
                    <NavLink className="flex px-4 py-2" to="/o'yin-konsollari">
                        <img src={Games} alt="" className="w-8 h-8 mr-2" />
                        <pre className="text-black text-[20px] p-1 hover:text-blue-500">
                            O'yin konsollari
                        </pre>
                    </NavLink>
                    <hr />
                </li>
                <li>
                    <NavLink className="flex px-4 py-2" to="/o'yin-geympadlar">
                        <img src={Game} alt="" className="w-8 h-8 mr-2" />
                        <pre className="text-black text-[20px] p-1 hover:text-blue-500">
                            O'yin geympadlari
                        </pre>
                    </NavLink>
                    <hr />
                </li>
                <li>
                    <NavLink className="flex px-4 py-2" to="/ko'zoynaklar">
                        <img src={Glasses} alt="" className="w-8 h-8 mr-2" />
                        <pre className="text-black text-[20px] p-1 hover:text-blue-500">
                            Ko'zoynaklari
                        </pre>
                    </NavLink>
                    <hr />
                </li>
                <li>
                    <NavLink className="flex px-4 py-2" to="/wifi-routerlar">
                        <img src={Wifi} alt="" className="w-8 h-8 mr-2" />
                        <pre className="text-black text-[20px] p-1 hover:text-blue-500">
                            Wi-Fi routerlari
                        </pre>
                    </NavLink>
                    <hr />
                </li>
                <li>
                    <NavLink className="flex px-4 py-2" to="/kullerlar">
                        <img src={Culler} alt="" className="w-8 h-8 mr-2" />
                        <pre className="text-black text-[20px] p-1 hover:text-blue-500">
                            Kullerlar
                        </pre>
                    </NavLink>
                    <hr />
                </li>
                <li>
                    <NavLink className="flex px-4 py-2" to="/caselar">
                        <img src={Home} alt="" className="w-8 h-8 mr-2" />
                        <pre className="text-black text-[20px] p-1 hover:text-blue-500">
                            Uy-joylar
                        </pre>
                    </NavLink>
                    <hr />
                </li>
                <li>
                    <NavLink className="flex px-4 py-2" to="/kreslolar">
                        <img src={Armchair} alt="" className="w-8 h-8 mr-2" />
                        <pre className="text-black text-[20px] p-1 hover:text-blue-500">
                            Kreslolar
                        </pre>
                    </NavLink>
                    <hr />
                </li>
                <li>
                    <NavLink className="flex px-4 py-2" to="/stollar">
                        <img src={Table} alt="" className="w-8 h-8 mr-2" />
                        <pre className="text-black text-[20px] p-1 hover:text-blue-500">
                            O'yin stollari
                        </pre>
                    </NavLink>
                    <hr />
                </li>
                <div>
                    <NavLink to="/maxsus">
                        <img src={AKSIYA} alt="" className="my-10" />
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/yangiliklar">
                        <img src={News} alt="" className="my-10" />
                    </NavLink>
                </div>
            </ul>
        </div>
    )
}

export default Katalog