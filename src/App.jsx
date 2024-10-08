import "./App.css";
// import Dashboard from './pages/Dashboard.jsx'
import SignIn from "./pages/SignIn";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";
import Header from "./pages/Home.jsx";
import About from "./pages/About.jsx";

import ITECH from "./img/itec.png";
import { LiaShoppingBasketSolid } from "react-icons/lia";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { IoExitOutline } from "react-icons/io5";
import AddToCard from "./pages/AddToCard.jsx";
import ContactJizzax from "./pages/Contact1.jsx";
import ContactToshkent from "./pages/Contact2.jsx";
import ProtectRouteAdmin from "./protectedRoutes/ProtectRouteAdmin.jsx";
import { Fragment, useState, useEffect } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import AdminPanel from "./pages/AdminPanel.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Aboutp from "./pages/Aboutp.jsx";

import { IoLocationOutline } from "react-icons/io5";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { TiGroup } from "react-icons/ti";
import Specials from "./pages/Specials.jsx";
import Sborki from "./pages/Sborki.jsx";
import SborkiDash from "./pages/SborkiDash.jsx";
import Shopmodal from "./pages/Showmodal.jsx";
import Like from "./pages/Like.jsx";
import News from "./pages/News.jsx";
import NewsDash from "./pages/NewsDash.jsx";
import Shopmodal1 from "./pages/Showmodal1.jsx";
import Laptop from "./pages/Laptop.jsx";
import LaptopDash from "./pages/LaptopDash.jsx";
import Klavayatura from "./pages/Klavyatura.jsx";
import KlavyaturaDash from "./pages/KlavyaturaDash.jsx";
import Mouse from "./pages/Mouse.jsx";
import MouseDash from "./pages/MouseDash.jsx";

import { FiHeart } from "react-icons/fi";
import Earphone from "./pages/Earphone.jsx";
import EarphoneDash from "./pages/EarphoneDash.jsx";
import Microphone from "./pages/Microphone.jsx";
import MicrophoneDash from "./pages/MicrophoneDash.jsx";
import Kovrek from "./pages/Kovrek.jsx";
import KovrekDash from "./pages/KovrekDash.jsx";
import Accessory from "./pages/Accessory.jsx";
import AccessoryDash from "./pages/AccessoryDash.jsx";
import Dekor from "./pages/Dekor.jsx";
import DekorDash from "./pages/DekorDash.jsx";
import Collection from "./pages/Collection.jsx";
import CollectionDash from "./pages/CollectionDash.jsx";
import Screen from "./pages/Screen.jsx";
import ScreenDash from "./pages/ScreenDash.jsx";
import Drayv from "./pages/Drayv.jsx";
import DrayvDash from "./pages/DrayvDash.jsx";
import Ram from "./pages/Ram.jsx";
import RamDash from "./pages/Ramdash.jsx";
import Ups from "./pages/Ups.jsx";
import UpsDash from "./pages/Upsdash.jsx";
import Blockpetane from "./pages/Blockpetane.jsx";
import BlockpetaneDash from "./pages/BlockpetaneDash.jsx";
import Kalonka from "./pages/Kalonka.jsx";
import KalonkaDash from "./pages/KalonkaDash.jsx";
import Camera from "./pages/Camera.jsx";
import CameraDash from "./pages/CameraDash.jsx";
import Apple from "./pages/Apple.jsx";
import AppleDash from "./pages/AppleDash.jsx";
import Game from "./pages/Game.jsx";
import GameDash from "./pages/GameDash.jsx";
import Gamer from "./pages/Gamer.jsx";
import GamerDash from "./pages/GamerDash.jsx";
import Glasses from "./pages/Glasses.jsx";
import GlassesDash from "./pages/GlassesDash.jsx";
import Wifi from "./pages/Wifi.jsx";
import Kuller from "./pages/Kuller.jsx";
import WifiDash from "./pages/WifiDash.jsx";
import KullerDash from "./pages/KullerDash.jsx";
import Case from "./pages/Case.jsx";
import CaseDash from "./pages/Casedash.jsx";
import Kreslo from "./pages/Kreslo.jsx";
import KresloDash from "./pages/KresloDash.jsx";
import Table from "./pages/Table.jsx";
import TableDash from "./pages/TableDash.jsx";


function App() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cards")) || [];
    setCount(cartItems.length);
  }, []);

  const handleShow = () => {
    setShow(!show);
    let root = document.getElementsByTagName("html")[0];
    show ? (root.style.overflowY = "auto") : (root.style.overflowY = "hidden");
  };

  let user = localStorage.getItem("users");

  const logOut = () => {
    localStorage.removeItem("users");
    window.location.reload();
    <Navigate to={"/"} />;
  };

  return (
    <BrowserRouter>
      <div className="w-[100%] bg-[#F6F5F5]">
        <div className="top-navbar">
          <nav className="max-lg:hidden max-sm:hidden ">
            <ul className="flex gap-10 m-auto text-white text-[20px] mt-2">
              <li>
                <NavLink className="flex gap-3" to="/" >
                  <FaHome />
                  <b className="mt-[-3.1%] font-normal">Bosh sahifa</b>
                </NavLink>
              </li>
              <li>
                <NavLink className="flex gap-3" to="/about">
                  <TiGroup /> <b className="mt-[-2%] font-normal">Biz haqimizda</b>
                </NavLink>
              </li>
            </ul>
          </nav>
          <RiMenu3Fill
            className="hidden max-lg:block max-sm:block text-[35px] text-white"
            onClick={handleShow}
          />
          {show && (
            <Fragment>
              <div
                onClick={handleShow}
                className="w-[100%] h-[50vh] bg-[rgba(0,0,0,0.5)] absolute top-0 left-0 "
              ></div>
              <div className="w-[100%] h-[100vh] bg-white top-0 left-0 z-50 absolute max-sm:mt-[0px]">
                <div className="flex items-center w-[90%] m-auto">
                  <IoMdClose
                    className="text-[40px] mt-3 ml-auto text-black"
                    onClick={handleShow}
                  />
                </div>
                <hr className='bg-black m-auto max-w-[100%] mt-3' />
                <div className="flex justify-between">
                  <div>
                    <nav className="w-[100%] my-10 p-3">
                      <ul className="text-black w-[100%] text-[20px]">
                        <li>
                          <NavLink className="flex gap-5 my-5" to="/" onClick={handleShow}>
                            <FaHome className="text-[30px]" />
                            <pre>Bosh sahifa</pre>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink className="flex gap-5 my-5" to="/about" onClick={handleShow}>
                            <TiGroup className="text-[30px]" />
                            <pre className="">Biz haqimizda</pre>
                          </NavLink>
                        </li>
                        {user && (
                          <li>
                            <NavLink to="/adminpanel" onClick={handleShow}>
                              Admin Panel
                            </NavLink>
                          </li>
                        )}
                      </ul>
                    </nav>
                  </div>
                  <div className="flex text-black  my-[90px] p-3">
                    <ul>
                      <li>
                        <NavLink to={"sevimlilar"}>
                          <FiHeart onClick={handleShow} className="text-[25px] mt-1 mr-3 text-blue-500" />
                        </NavLink>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <small className="text-blue-600 absolute text-[18px] ml-[7%] font-bold mt-[-3%]">
                          {count}
                        </small>
                        <NavLink to={"savat"}>
                          <LiaShoppingBasketSolid
                            className="text-center text-[30px] mr-5 text-white max-sm:text-black"
                            onClick={handleShow}
                          />
                        </NavLink>
                      </li>
                    </ul>
                    <ul>
                      {user && (
                        <li>
                          <NavLink>
                            <IoExitOutline
                              onClick={logOut}
                              className="text-[30px] mr-5 text-red-600 max-lgtext-white"
                            />
                          </NavLink>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </Fragment>
          )}
          <div className="max-lg:hidden max-sm:hidden flex">
            <ul>
              <li>
                <NavLink to={"sevimlilar"}>
                  <FiHeart className="text-[22px] mt-1 mr-3 text-white" />
                </NavLink>
              </li>
            </ul>
            <ul>
              <li>
                <small className="text-blue-600 absolute text-[15px] ml-[1.5%] font-bold mt-[-0.5%]">
                  {count}
                </small>
                <NavLink to={"savat"}>
                  <LiaShoppingBasketSolid className="text-[22px] mt-1 text-white" />
                </NavLink>
              </li>
            </ul>
            <ul>
              {user && (
                <li className="ml-5 mt-1">
                  <NavLink>
                    <IoExitOutline
                      onClick={logOut}
                      className="text-[25px] text-red-600  max-lg:text-white"
                    />
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>

      <div className="nav">
        <div className="flex what max-sm:block">
          <NavLink to="/">
            <img
              src={ITECH}
              alt=""
              className="w-[300px] h-[100px] bg-black rounded-sm max-sm:w-[100%] max-sm:h-auto"
            />
          </NavLink>
          <div className="h-[80px] flex max-sm:my-5 max-sm:mx-3 ">
            <IoLocationOutline className="text-[60px] h-[80px] text-black" />
            <div className="max-sm:mx-5 max-sm:mt-[15px] max-sm:text-[16px]">
              <NavLink to="/contact-jizzax">
                <p className="max-sm:mt-0 mt-4 hover:text-blue-500"><u>Jizzax shahar 30-maktab</u></p>
              </NavLink>
              <NavLink to="/contact-toshkent">
                <p className="hover:text-blue-500"><u>Toshkent shahar Yunsobod 3/1</u></p>
              </NavLink>
            </div>
          </div>
          <div className="h-[80px] flex gap-3 max-sm:my-5 max-sm:mx-3 ">
            <FaPhoneSquareAlt className="text-black text-[60px] h-[80px]" />
            <div className="cursor-pointer max-sm:mt-[10px] max-sm:mx-5 max-sm:text-[20px]">
              <pre className="max-sm:m-0 mt-4 hover:text-blue-500">+998(99)342-97-00</pre>
              <pre className="hover:text-blue-500">+998(95)727-44-00</pre>
            </div>
          </div>
        </div>
      </div>

      {/* <Header />
      <Shop/> */}

      <Routes>
        <Route element={<Header count={count} setCount={setCount} />} path="/" />
        <Route element={<About />} path="/about" />
        <Route element={<ContactJizzax />} path="/contact-jizzax" />
        <Route element={<ContactToshkent />} path="/contact-toshkent" />
        <Route element={<SignIn />} path="/signin" />
        <Route element={<AddToCard />} path="/savat" />

        <Route element={<Specials count={count} setCount={setCount} />} path="/maxsus" />
        <Route element={<Sborki count={count} setCount={setCount} />} path="/stol-komputerlar" />
        <Route element={<Laptop count={count} setCount={setCount} />} path="/noutbuklar" />
        <Route element={<Klavayatura count={count} setCount={setCount} />} path="/klaviaturalar" />
        <Route element={<Mouse count={count} setCount={setCount} />} path="/sichqonchalar" />
        <Route element={<Earphone count={count} setCount={setCount} />} path="/quloqchinlar" />
        <Route element={<Microphone count={count} setCount={setCount} />} path="/mikrofonlar" />
        <Route element={<Kovrek count={count} setCount={setCount} />} path="/kovreklar" />
        <Route element={<Accessory count={count} setCount={setCount} />} path="/aksessuarlar" />
        <Route element={<Dekor count={count} setCount={setCount} />} path="/dekor" />
        <Route element={<Collection count={count} setCount={setCount} />} path="/to'plamlar" />
        <Route element={<Screen count={count} setCount={setCount} />} path="/monitorlar" />
        <Route element={<Drayv count={count} setCount={setCount} />} path="/drayvlar" />
        <Route element={<Ram count={count} setCount={setCount} />} path="/operativkalar" />
        <Route element={<Ups count={count} setCount={setCount} />} path="/upslar" />
        <Route element={<Blockpetane count={count} setCount={setCount} />} path="/bplar" />
        <Route element={<Kalonka count={count} setCount={setCount} />} path="/kalonkalar" />
        <Route element={<Camera count={count} setCount={setCount} />} path="/web-cameralar" />
        <Route element={<Apple count={count} setCount={setCount} />} path="/apple" />
        <Route element={<Game count={count} setCount={setCount} />} path="/o'yin-konsollari" />
        <Route element={<Gamer count={count} setCount={setCount} />} path="/o'yin-geympadlar" />
        <Route element={<Glasses count={count} setCount={setCount} />} path="/ko'zoynaklar" />
        <Route element={<Wifi count={count} setCount={setCount} />} path="/wifi-routerlar" />
        <Route element={<Kuller count={count} setCount={setCount} />} path="/kullerlar" />
        <Route element={<Case count={count} setCount={setCount} />} path="/caselar" />
        <Route element={<Kreslo count={count} setCount={setCount} />} path="/kreslolar" />
        <Route element={<Table count={count} setCount={setCount} />} path="/stollar" />

        <Route element={<Shopmodal1 count={count} setCount={setCount}/>} path="/batafsil" />
        <Route element={<Shopmodal count={count} setCount={setCount}/>} path="/chegirmalik" />
        <Route element={<Like />} path="/sevimlilar" />
        <Route element={<News />} path="/yangiliklar" />
        <Route
          element={
            <ProtectRouteAdmin>
              <Aboutp />
            </ProtectRouteAdmin>
          }
          path="/aboutp"
        />
        <Route
          element={
            <ProtectRouteAdmin>
              <Dashboard />
            </ProtectRouteAdmin>
          }
          path="/dashboard"
        />
        <Route
          element={
            <ProtectRouteAdmin>
              <AdminPanel />
            </ProtectRouteAdmin>
          }
          path="/adminpanel"
        />
        <Route
          element={
            <ProtectRouteAdmin>
              <SborkiDash />
            </ProtectRouteAdmin>
          }
          path="/sborkidash"
        />
        <Route
          element={
            <ProtectRouteAdmin>
              <NewsDash />
            </ProtectRouteAdmin>
          }
          path="/yangiliklardash"
        />
        <Route
          element={
            <ProtectRouteAdmin>
              <LaptopDash />
            </ProtectRouteAdmin>
          }
          path="/noutbukdash"
        />
        <Route
          element={
            <ProtectRouteAdmin>
              <KlavyaturaDash />
            </ProtectRouteAdmin>
          }
          path="/klaviaturadash"
        />
        <Route
          element={
            <ProtectRouteAdmin>
              <MouseDash />
            </ProtectRouteAdmin>
          }
          path="/sichqonchadash"
        />
        <Route
          element={
            <ProtectRouteAdmin>
              <EarphoneDash />
            </ProtectRouteAdmin>
          }
          path="/quloqchindash"
        />
        <Route
          element={
            <ProtectRouteAdmin>
              <MicrophoneDash />
            </ProtectRouteAdmin>
          }
          path="/mikrofondash"
        />
        <Route
          element={
            <ProtectRouteAdmin>
              <KovrekDash />
            </ProtectRouteAdmin>
          }
          path="/kovrekdash"
        />
        <Route
          element={
            <ProtectRouteAdmin>
              <AccessoryDash />
            </ProtectRouteAdmin>
          }
          path="/aksessuardash"
        />
        <Route
          element={
            <ProtectRouteAdmin>
              <DekorDash />
            </ProtectRouteAdmin>
          }
          path="/dekordash"
        />
        <Route
          element={
            <ProtectRouteAdmin>
              <CollectionDash />
            </ProtectRouteAdmin>
          }
          path="/to'plamdash"
        />
        <Route
          element={
            <ProtectRouteAdmin>
              <ScreenDash />
            </ProtectRouteAdmin>
          }
          path="/monitordash"
        />
        <Route
          element={
            <ProtectRouteAdmin>
              <DrayvDash />
            </ProtectRouteAdmin>
          }
          path="/drayvdash"
        />
        <Route
          element={
            <ProtectRouteAdmin>
              <RamDash />
            </ProtectRouteAdmin>
          }
          path="/operativkadash"
        />
        <Route
          element={
            <ProtectRouteAdmin>
              <UpsDash />
            </ProtectRouteAdmin>
          }
          path="/upsdash"
        />
        <Route
          element={
            <ProtectRouteAdmin>
              <BlockpetaneDash />
            </ProtectRouteAdmin>
          }
          path="/bpdash"
        />
        <Route
          element={
            <ProtectRouteAdmin>
              <KalonkaDash />
            </ProtectRouteAdmin>
          }
          path="/kalonkadash"
        />
        <Route
          element={
            <ProtectRouteAdmin>
              <CameraDash />
            </ProtectRouteAdmin>
          }
          path="/web-cameradash"
        />
        <Route
          element={
            <ProtectRouteAdmin>
              <AppleDash />
            </ProtectRouteAdmin>
          }
          path="/appledash"
        />
        <Route
          element={
            <ProtectRouteAdmin>
              <GameDash />
            </ProtectRouteAdmin>
          }
          path="/o'yin-konsoldash"
        />
        <Route
          element={
            <ProtectRouteAdmin>
              <GamerDash />
            </ProtectRouteAdmin>
          }
          path="/o'yin-geympaddash"
        />
        <Route
          element={
            <ProtectRouteAdmin>
              <GlassesDash />
            </ProtectRouteAdmin>
          }
          path="/ko'zoynakdash"
        />
        <Route
          element={
            <ProtectRouteAdmin>
              <WifiDash />
            </ProtectRouteAdmin>
          }
          path="/wifi-routerdash"
        />
        <Route
          element={
            <ProtectRouteAdmin>
              <KullerDash />
            </ProtectRouteAdmin>
          }
          path="/kullerdash"
        />
        <Route
          element={
            <ProtectRouteAdmin>
              <CaseDash />
            </ProtectRouteAdmin>
          }
          path="/casedash"
        />
        <Route
          element={
            <ProtectRouteAdmin>
              <KresloDash />
            </ProtectRouteAdmin>
          }
          path="/kreslodash"
        />
        <Route
          element={
            <ProtectRouteAdmin>
              <TableDash />
            </ProtectRouteAdmin>
          }
          path="/stoldash"
        />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
