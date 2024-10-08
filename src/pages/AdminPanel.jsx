import { BrowserRouter, Routes, Route, NavLink, Navigate, Link } from 'react-router-dom';
import CEO from '../img/itech2.png';
import AdminMenu from './AdminMenu';



function AdminPanel() {
    return (
        <div>
            <div>
                <div className='bg-black h-auto max-sm:h-[22%]'>
                    <AdminMenu />
                </div>
            </div>

            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-10 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">ITEC COMPUTERS Admin Panel
                        </h1>
                        <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                        <div className="flex justify-center">
                            <button className="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Kirish</button>
                            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Chiqish</button>
                        </div>
                    </div>
                    <div className="mr-[-50px] lg:max-w-lg lg:w-full md:w-1/2 w-5/6 max-sm:max-w-[100%] max-sm:m-auto">
                        <img className="object-cover object-center rounded bg-black" alt="hero" src={CEO} />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AdminPanel