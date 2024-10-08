import { addDoc, collection, deleteDoc, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db, firestorege } from '../firebase';
import { useState, useEffect, Fragment } from "react";
import { v4 as uuidv4 } from 'uuid';
import { notification } from 'antd';
import { NavLink } from "react-router-dom";
import CEO from '../img/itech2.png';
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

import { FaImage } from "react-icons/fa";
import AdminMenu from "./AdminMenu";



// const database = getDatabase();

function Dashboard() {
    const [blog, setBlog] = useState([]);
    const [img, setImg] = useState(['']);
    const [img1, setImg1] = useState(['']);
    const [img2, setImg2] = useState(['']);
    const [category, setCategory] = useState(['']);
    const [oldprice, setOldprice] = useState(['']);
    const [sale, setSale] = useState(['']);
    const [price, setPrice] = useState(['']);
    const [matn, setMatn] = useState(['']);
    const [title, setTitle] = useState(['']);
    const [id, setId] = useState('');
    const [show, setShow] = useState(true);
    const [show1, setShow1] = useState(false);


    useEffect(() => {
        let data = collection(db, 'maxsus')
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

    const database = collection(db, "maxsus")

    const cartCreate = async (e) => {

        if (img == "" || img1 == "" || img2 == "" || matn == "" || title == "" || category == "" || price == "") {
            return notification.error({
                message: "Ma'lumotni to'liq kiriting !",
                description: "Inputlarga hamma ma'lumotni to'liq kiriting ! Bitta ham Input bo'sh qolmasin !"
            })
        }
        else {
            e.preventDefault();

            await addDoc(database, {
                img: img,
                img1: img1,
                img2: img2,
                category: category,
                oldprice: oldprice,
                sale: sale,
                price: price,
                matn: matn,
                title: title,
                id: uuidv4()
            });

            notification.success({
                message: "Ma'lumotni yuborildi !",
                description: "Xavotir olmang hamma ma'lumotlaringiz to'liq va xafsiz yuborildi !"
            });

            setImg("");
            setImg1("");
            setImg2("");
            setCategory("");
            setOldprice("");
            setSale("");
            setPrice("");
            setMatn("");
            setTitle("");
        }

    };

    const cartDelete = async (id) => {
        const deletePost = doc(db, "maxsus", id);
        await deleteDoc(deletePost);
        console.log(id);
    }

    const cartEdit = async (img, img1, img2, category, oldprice, sale, price, matn, title, id) => {
        setImg(img);
        setImg1(img1);
        setImg2(img2);
        setCategory(category);
        setOldprice(oldprice);
        setSale(sale);
        setPrice(price);
        setMatn(matn);
        setTitle(title);
        setId(id);
        setShow(false);
    }

    const cartUpdate = async () => {
        const updateData = doc(db, 'maxsus', id);
        await updateDoc(updateData, { img, img1, img2, category, oldprice, sale, price, matn, title });

        if (img == "" || img1 == "" || img2 == "" || matn == "" || title == "" || category == "" || price == "") {
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
            setImg1("");
            setImg2("");
            setCategory("");
            setOldprice("");
            setSale("");
            setPrice("");
            setMatn("");
            setTitle("");
        }
        window.location.reload();
    }


    const handleUpload = (e, imgRefPath, setImg) => {
        const img = e.target.files[0];
        console.log(img.name);

        const imgRef = ref(firestorege, imgRefPath);
        uploadBytes(imgRef, img).then((data) => {
            console.log(data);
            getDownloadURL(data.ref).then(val => setImg(val));
        });
    };



    const handleUploadFile = (e, imgRefPath, setImg) => {
        handleUpload(e, imgRefPath, setImg);
    };

    const handleShow = () => {
        setShow1(true)
    }

    const handleClose = () => {
        setShow1(false)
    }


    return (

        <div>

            <div className='bg-black h-auto max-sm:pt-10 max-sm:h-auto'>
                <AdminMenu />
            </div>

            <h2 className="text-red-600"></h2>

            <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Chegirmali</h1>
                    </div>

                    <div className="text-center">
                        <button className="text-white mr-2 bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={handleShow}>Ochish</button>
                        <button className="text-white ml-2 bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg" onClick={handleClose}>Yoqish</button>
                    </div>

                    {show1 ? <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <div className="flex flex-wrap -m-2">
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="file1" className="leading-7 text-sm text-gray-600 w-full m-auto items-center flex justify-around flex-col h-[70px]">
                                        <FaImage className="text-[30px] cursor-pointer" />
                                    </label>
                                    <input
                                        onChange={(e) => handleUploadFile(e, `user/${e.target.files[0].name}`, setImg)}
                                        type="file"
                                        id="file1"
                                        name="file1"
                                        className="hidden"
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="file2" className="leading-7 text-sm text-gray-600 w-full m-auto items-center flex justify-around flex-col h-[70px]">
                                        <FaImage className="text-[30px] cursor-pointer" />
                                    </label>
                                    <input
                                        onChange={(e) => handleUploadFile(e, `user/${e.target.files[0].name}`, setImg1)}
                                        type="file"
                                        id="file2"
                                        name="file2"
                                        className="hidden"
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="file3" className="leading-7 text-sm text-gray-600 w-full m-auto items-center flex justify-around flex-col h-[70px]">
                                        <FaImage className="text-[30px] cursor-pointer" />
                                    </label>
                                    <input
                                        onChange={(e) => handleUploadFile(e, `user/${e.target.files[0].name}`, setImg2)}
                                        type="file"
                                        id="file3"
                                        name="file3"
                                        className="hidden"
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">Nomi</label>
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
                                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">Kategoriya</label>
                                    <input
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                        type="text"
                                        id="email"
                                        name="email"
                                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">Eski narx</label>
                                    <input
                                        value={oldprice}
                                        onChange={(e) => setOldprice(e.target.value)}
                                        type="number"
                                        id="email"
                                        name="email"
                                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">Chegirma</label>
                                    <input
                                        value={sale}
                                        onChange={(e) => setSale(e.target.value)}
                                        type="number"
                                        id="email"
                                        name="email"
                                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">Narxi</label>
                                    <input
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                        type="number"
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

                            </div>
                        </div>
                    </div> : " "}
                </div>
            </section>

            <div>
                <div className="lg:w-2/3 w-full mx-auto overflow-auto">
                    <div className="flex flex-col">
                        <div>
                            <hr className="border-black mb-3" />
                            <div className="font-bold text-blue-500 flex justify-between mx-10 max-sm:mx-1 max-sm:text-[13px]">
                                <h1>Rasm</h1>
                                <h1>Nomi</h1>
                                <h1>Narxi</h1>
                                <h1>Kategoriya</h1>
                                <h1>Tahrirlash</h1>
                                <h1>Oʻchirish</h1>
                            </div>
                            <hr className="border-black mt-3" />
                        </div>
                        <section className="text-gray-600 body-font flex flex-wrap max-w-[1200px] m-auto">
                            {
                                blog.map((data) => {
                                    return (
                                        <Fragment key={data.id}>
                                            <div className="mt-3 w-[100%] flex justify-between items-center mb-3 max-sm:mx-1">
                                                <img className="w-[8%] h-[70%]" name="img" id="img" src={data.img} alt="" />
                                                <b className="w-[10%] ml-[-8%] text-center max-sm:text-[10px] max-sm:ml-[-1%]" name="nameprodust" id="nameprodust">{data.title}</b>
                                                <p className="text-[20px] ml-[-5%] max-sm:ml-[5%] max-sm:text-[13px]" name="price" id="price">{data.price} $</p>
                                                <div className="w-16 text-[15px] text-center flex items-center justify-center max-sm:text-[10px]">
                                                    <p className="mx-2">{data.category}</p>
                                                </div>

                                                <FiEdit className="text-[25px] text-blue-500 w-16 text-center cursor-pointer" onClick={() => cartEdit(data.img, data.img1, data.img2, data.category, data.oldprice, data.sale, data.price, data.matn, data.title, data.id)} />
                                                <MdDelete className="text-[25px] text-blue-500 w-16 text-center cursor-pointer" onClick={() => cartDelete(data.id)} />
                                            </div>
                                        </Fragment>
                                    )
                                })
                            }
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard


