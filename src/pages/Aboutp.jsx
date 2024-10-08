import { addDoc, collection, deleteDoc, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db, firestorege } from '../firebase';
import { useState, useEffect, Fragment } from "react";
import { v4 as uuidv4 } from 'uuid';
import { notification } from 'antd';
import { NavLink } from "react-router-dom";
import CEO from '../img/itech2.png';
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { FaImage } from "react-icons/fa";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import AdminMenu from "./AdminMenu";




function Aboutp() {
    const [blog, setBlog] = useState([]);
    const [matn, setMatn] = useState(['']);
    const [title, setTitle] = useState(['']);
    const [img, setImg] = useState(['']);
    const [instagram, setInstagram] = useState(['']);
    const [telegram, setTelegram] = useState(['']);
    const [phonenumber, setPhonenumber] = useState(['']);
    const [show, setShow] = useState(true);
    const [show1, setShow1] = useState(false);
    const [id, setId] = useState('');


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

    const database = collection(db, "aboutcrud")

    const cartCreate = async (e) => {

        if (img == "" || matn == "" || title == "" || instagram == "" || telegram == "" || phonenumber == "") {
            return notification.error({
                message: "Ma'lumotni to'liq kiriting !",
                description: "Inputlarga hamma ma'lumotni to'liq kiriting ! Bitta ham Input bo'sh qolmasin !"
            })
        }
        else {
            e.preventDefault();

            await addDoc(database, {
                img: img,
                instagram: instagram,
                telegram: telegram,
                phonenumber: phonenumber,
                matn: matn,
                title: title,
                id: uuidv4()
            });

            notification.success({
                message: "Ma'lumotni yuborildi !",
                description: "Xavotir olmang hamma ma'lumotlaringiz to'liq va xafsiz yuborildi !"
            });

            setImg("");
            setInstagram("");
            setTelegram("");
            setPhonenumber("");
            setMatn("");
            setTitle("");
        }

        window.location.reload();

    };

    const cartDelete = async (id) => {
        const deletePost = doc(db, "aboutcrud", id);
        await deleteDoc(deletePost);
        console.log(id);
    }

    const cartEdit = async (img, instagram, telegram, phonenumber, title, matn, id) => {
        setImg(img);
        setInstagram(instagram);
        setTelegram(telegram);
        setPhonenumber(phonenumber);
        setTitle(title);
        setMatn(matn);
        setId(id);
        setShow(false);

    }

    const cartUpdate = async () => {
        const updateData = doc(db, 'aboutcrud', id);
        await updateDoc(updateData, { img, instagram, telegram, phonenumber, matn, title });

        if (img == "" || matn == "" || title == "" || instagram == "" || telegram == "" || phonenumber == "") {
            return notification.error({
                message: "Ma'lumotni to'liq kiriting !",
                description: "Inputlarga hamma ma'lumotni to'liq kiriting ! Bitta ham Input bo'sh qolmasin !"
            })
        }
        else {

            notification.success({
                message: "Ma'lumotni yuborildi !",
                description: "Xavotir olmang hamma ma'lumotlaringiz to'liq va xafsiz yuborildi !"
            });

            setImg("");
            setInstagram("");
            setTelegram("");
            setPhonenumber("");
            setMatn("");
            setTitle("");
        }

        window.location.reload();
    }

    const handleUpload = (e) => {
        console.log(e.target.files[0].name);
        const img = e.target.files[0]
        const imgRef = ref(firestorege, `user/${img.name}`)
        uploadBytes(imgRef, img).then((data) => {
            console.log(data);
            getDownloadURL(data.ref).then(val =>
                setImg(val)
            )
        })
    }


    const handleShow = () => {
        setShow1(true)
    }

    const handleClose = () => {
        setShow1(false)
    }


    return (

        <div>
            <div className='bg-black h-auto max-sm:h-auto'>
                <AdminMenu />
            </div>

            <h2 className="text-red-600"></h2>

            <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Mijozlar uchun</h1>
                    </div>

                    <div className="text-center">
                        <button className="text-white mr-2 bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={handleShow}>Ochish</button>
                        <button className="text-white ml-2 bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg" onClick={handleClose}>Yoqish</button>
                    </div>

                    {show1 ?
                        <div className="lg:w-1/2 md:w-2/3 mx-auto">
                            <div className="flex flex-wrap -m-2">
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label htmlFor="name" className="leading-7 text-sm text-gray-600">Sarlavha</label>
                                        <input
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                            type="text"
                                            id="email"
                                            name="email"
                                            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                        />
                                    </div>
                                </div>
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label htmlFor="name" className="leading-7 text-sm text-gray-600 w-full m-auto items-center flex justify-around flex-col h-[70px]"><FaImage className="text-[30px] cursor-pointer" /></label>
                                        <input
                                            onChange={(e) => handleUpload(e)}
                                            type="file"
                                            id="name"
                                            name="name"
                                            className="hidden"
                                        />
                                    </div>
                                </div>
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Instagram</label>
                                        <input
                                            value={instagram}
                                            onChange={(e) => setInstagram(e.target.value)}
                                            type="text"
                                            id="name"
                                            name="name"
                                            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                        />
                                    </div>
                                </div>
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Telegram</label>
                                        <input
                                            value={telegram}
                                            onChange={(e) => setTelegram(e.target.value)}
                                            type="text"
                                            id="name"
                                            name="name"
                                            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                        />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Telefon nomer</label>
                                        <input
                                            value={phonenumber}
                                            onChange={(e) => setPhonenumber(e.target.value)}
                                            type="text"
                                            id="email"
                                            name="email"
                                            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                        />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label htmlFor="message" className="leading-7 text-sm text-gray-600">To'liq ma'lumot</label>
                                        <textarea
                                            value={matn}
                                            onChange={(e) => setMatn(e.target.value)}
                                            id="message"
                                            name="message"
                                            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                    </div>
                                </div>
                                <div className="p-2  m-auto">
                                    {show ? <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={cartCreate}>Yaratish</button> : <button className="boder px-4 py-2 mt-2 mb-6 bg-green-400 text-white rounded" onClick={cartUpdate}>Yangilash</button>}
                                    <br /><br />
                                </div>=
                            </div>
                        </div>
                        : " "}

                </div>
            </section>

            <div className="lg:w-2/3 w-full mx-auto overflow-auto">
                <div className="flex flex-col">
                    <div>
                        <hr className="border-black mb-3" />
                        <div className="font-bold text-blue-500 flex justify-between mx-3">
                            <h1>Rasm</h1>
                            <h1>Nomi</h1>
                            <h1>Tahrirlash</h1>
                            <h1>Oʻchirish</h1>
                        </div>
                        <hr className="border-black mt-3" />
                    </div>
                    <div className="flex flex-wrap -m-[-1%]">
                        {blog.map((item, index) => (
                            <Fragment key={index}>
                                <div className="mt-3 w-[100%] flex justify-between items-center mb-3">
                                    <img className="w-[10%] h-[70%]" name="img" id="img" src={item.img} alt="" />
                                    <b className="w-[10%] ml-[-5%] text-center" name="nameprodust" id="nameprodust">{item.title}</b>

                                    <FiEdit className="text-[25px] text-blue-500 w-16 text-center cursor-pointer" onClick={() => cartEdit(item.img, item.instagram, item.telegram, item.phonenumber, item.title, item.matn, item.id,)} />
                                    <MdDelete className="text-[25px] text-blue-500 w-16 text-center cursor-pointer" onClick={() => cartDelete(item.id)} />
                                </div>
                            </Fragment>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Aboutp


