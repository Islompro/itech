import { useState } from "react";
import { NavLink } from "react-router-dom"


function AdminMenu() {
    const [show, setShow] = useState(false);


    const handleShow = () => {
        setShow(true)
    }

    const handleClose = () => {
        setShow(false)
    }


    return (
        <div className="py-3 max-sm:p-3 max-sm:pt-5 pt-5">
            <div className="text-center m-auto">
                <button className="text-white mr-2 bg-black border-[1px] border-white py-2 px-6 focus:outline-none hover:bg-white rounded text-lg hover:text-black" onClick={handleShow}>Ochish</button>
                <button className="text-black ml-2 bg-white border-[1px] border-white py-2 px-6 focus:outline-none hover:bg-black rounded text-lg hover:border-[1px] hover:border-white hover:text-white" onClick={handleClose}>Yoqish</button>
            </div>
            <nav className='p-1 max-w-[72%] flex mx-auto'>
                {show ? <ul className='w-[100%] py-1 h-auto text-center max-sm:block flex flex-wrap gap-5 justify-center text-white text-[20px] font-medium max-sm:text-[30px]'>
                    <li><NavLink to="/adminpanel"></NavLink></li>
                    <li><NavLink to="/aboutp">Mijozlar uchun</NavLink></li>
                    <li><NavLink to="/yangiliklardash">Yangiliklar</NavLink></li>
                    <li><NavLink to="/dashboard">Chegirmali</NavLink></li>
                    <li><NavLink to="/sborkidash">Oʻyin tuzilmalari</NavLink></li>
                    <li><NavLink to="/noutbukdash">Noutbuklar</NavLink></li>
                    <li><NavLink to="/klaviaturadash">Klaviaturalar</NavLink></li>
                    <li><NavLink to="/sichqonchadash">Sichqonchalar</NavLink></li>
                    <li><NavLink to="/quloqchindash">Quloqchinlar</NavLink></li>
                    <li><NavLink to="/mikrofondash">Mikrofonlar</NavLink></li>
                    <li><NavLink to="/kovrekdash">Kovreklar</NavLink></li>
                    <li><NavLink to="/aksessuardash">Aksessuarlar</NavLink></li>
                    <li><NavLink to="/dekordash">Dekorlar</NavLink></li>
                    <li><NavLink to="/to'plamdash">To'plamlar</NavLink></li>
                    <li><NavLink to="/monitordash">Monitorlar</NavLink></li>
                    <li><NavLink to="/drayvdash">Drayvlar</NavLink></li>
                    <li><NavLink to="/operativkadash">RAM</NavLink></li>
                    <li><NavLink to="/upsdash">UPS</NavLink></li>
                    <li><NavLink to="/bpdash">Quvvat manbai</NavLink></li>
                    <li><NavLink to="/kalonkadash">Kalonkalar</NavLink></li>
                    <li><NavLink to="/web-cameradash">Web-kameralar</NavLink></li>
                    <li><NavLink to="/appledash">Apple-mahsulotlari</NavLink></li>
                    <li><NavLink to="/o'yin-konsoldash">O'yin-konsollari</NavLink></li>
                    <li><NavLink to="/o'yin-geympaddash">O'yin-geympadlari</NavLink></li>
                    <li><NavLink to="/ko'zoynakdash">Ko'zoynaklar</NavLink></li>
                    <li><NavLink to="/wifi-routerdash">Wifi-routerlar</NavLink></li>
                    <li><NavLink to="/kullerdash">Kullerlar</NavLink></li>
                    <li><NavLink to="/casedash">Caselar</NavLink></li>
                    <li><NavLink to="/kreslodash">O'yin kreslolari</NavLink></li>
                    <li><NavLink to="/stoldash">O'yin stollari</NavLink></li>
                </ul> : " "}

            </nav>
        </div>
    )
}

export default AdminMenu