import { FaPhoneSquareAlt } from "react-icons/fa"
import Footer from "./Footer"
import { IoLocationOutline } from "react-icons/io5"
import { NavLink } from "react-router-dom"
import { FcOvertime } from "react-icons/fc";



function Contact() {
  return (
    <div className="bg-white">
      <section className="max-w-[70%] m-auto text-gray-600 body-font relative max-sm:max-w-[98%]">
        <div className="max-sm:py-20 container py-[7%] mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe width="100%" height="100%" className="absolute inset-0 border-[5px] border-blue-500" frameBorder="0" title="map" marginHeight="0" marginWidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3050.310338710616!2d67.82435828843738!3d40.13537040608689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b29778eff2d587%3A0x90776cee6f782ecc!2sITECH%20COMPUTERS!5e0!3m2!1sen!2s!4v1723204226339!5m2!1sen!2s"></iframe>
            <div className="max-sm:mt-[50vh] bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">MANZIL</h2>
                <p className="mt-1"> Jizzax shahar Zargarlik mahallasi <b> ITECH COMPUTERS</b> do'koni. </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADMIN</h2>
                <a href="https://t.me/itech_adm" className="text-indigo-500 leading-relaxed">@itech_adm</a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">TELEFON</h2>
                <p className="leading-relaxed">+998(99)342-97-00</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 border-4 rounded-2xl border-blue-500 bg-white flex flex-col md:ml-auto w-full p-10 md:py-8 mt-8 md:mt-0">
            <h2 className="text-gray-900 text-[24px] mb-1 font-medium title-font max-sm:text-[24px]">Kontaktlar</h2>
            <p className="leading-relaxed mb-5 text-gray-600"><font className="text-blue-500 font-medium">ITEC COMPUTERS</font> - bilan bog'lanish uchun !</p>
            <div className="h-[80px] flex gap-3">
              <FaPhoneSquareAlt className="text-blue-500 text-[60px] h-[80px]" />
              <div className="cursor-pointer">
                <pre className="mt-5 text-[25px] hover:text-blue-500 max-sm:text-[23px] max-sm:mt-6">+998(99)342-97-00</pre>
              </div>
            </div>
            <div className="h-[80px] flex gap-3">
              <FaPhoneSquareAlt className="text-blue-500 text-[60px] h-[80px]" />
              <div className="cursor-pointer">
                <pre className="mt-5 text-[25px] hover:text-blue-500 max-sm:text-[23px] max-sm:mt-6">+998(95)727-44-00</pre>
              </div>
            </div>


            <div className="text-center">
              <FcOvertime className="text-[80px] my-3 w-[95%] text-blue-500 max-sm:text-[70px] max-sm:w-[100%]" />
              <div className="text-black font-thin">
                <p><b className="font-bold mx-3">Ish vaqti:</b> Seshanba, Chorshanba, Payshanba, Shanba, Yakshanba | <b className="font-semibold">Soat: </b>09:00 - 19:00</p><br />
                <p><b className="font-bold mx-3">Yopiq:</b>Dushanba</p>
              </div>
            </div>
            <hr className="my-3 border-blue-500 border-1" />
            <div className="flex justify-center gap-1 max-sm: max-sm:gap-1 ">
              <b className="text-[15px] max-sm:text-[14px]">Umumiy savollar uchun: </b>
              <a className="text-blue-500" href="https://t.me/itech_adm">ITECH ADMIN</a>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Contact