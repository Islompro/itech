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

function NewsDash() {
    const [blog, setBlog] = useState([]);
    const [matn, setMatn] = useState('');
    const [title, setTitle] = useState('');
    const [img, setImg] = useState('');
    const [show, setShow] = useState(true);
    const [show1, setShow1] = useState(false);
    const [id, setId] = useState('');

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

    const database = collection(db, "news");

    const cartCreate = async (e) => {
        e.preventDefault();

        if (img === "" || matn === "" || title === "") {
            return notification.error({
                message: "Ma'lumotni to'liq kiriting !",
                description: "Inputlarga hamma ma'lumotni to'liq kiriting ! Bitta ham Input bo'sh qolmasin !"
            });
        }

        try {
            await addDoc(database, {
                img,
                matn,
                title,
                id: uuidv4()
            });

            notification.success({
                message: "Ma'lumotni yuborildi !",
                description: "Xavotir olmang hamma ma'lumotlaringiz to'liq va xafsiz yuborildi !"
            });

            setImg("");
            setMatn("");
            setTitle("");
        } catch (error) {
            notification.error({
                message: "Xato yuz berdi",
                description: "Ma'lumot yuborishda xato yuz berdi, qayta urinib ko'ring."
            });
        }
    };

    const cartDelete = async (id) => {
        try {
            const deletePost = doc(db, "news", id);
            await deleteDoc(deletePost);
        } catch (error) {
            notification.error({
                message: "Xato",
                description: "Ma'lumotni o'chirishda xato yuz berdi."
            });
        }
    };

    const cartEdit = (img, title, matn, id) => {
        setImg(img);
        setTitle(title);
        setMatn(matn);
        setId(id);
        setShow(false);
    };

    const cartUpdate = async () => {
        if (img === "" || matn === "" || title === "") {
            return notification.error({
                message: "Ma'lumotni to'liq kiriting !",
                description: "Inputlarga hamma ma'lumotni to'liq kiriting ! Bitta ham Input bo'sh qolmasin !"
            });
        }

        try {
            const updateData = doc(db, 'news', id);
            await updateDoc(updateData, { img, matn, title });

            notification.success({
                message: "Ma'lumot yangilandi !",
                description: "Ma'lumot muvaffaqiyatli yangilandi."
            });

            setImg("");
            setMatn("");
            setTitle("");
            setShow(true);
        } catch (error) {
            notification.error({
                message: "Xato",
                description: "Ma'lumotni yangilashda xato yuz berdi."
            });
        }
    };

    const handleUpload = (e) => {
        const file = e.target.files[0];
        const imgRef = ref(firestorege, `user/${file.name}`);
        uploadBytes(imgRef, file).then((data) => {
            getDownloadURL(data.ref).then(url => setImg(url));
        }).catch((error) => {
            notification.error({
                message: "Xato",
                description: "Rasm yuklashda xato yuz berdi."
            });
        });
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

            <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Yangiliklar</h1>
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
                                        <label htmlFor="title" className="leading-7 text-sm text-gray-600">Sarlavha</label>
                                        <input
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                            type="text"
                                            id="title"
                                            name="title"
                                            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                        />
                                    </div>
                                </div>
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label htmlFor="file" className="leading-7 text-sm text-gray-600 w-full m-auto items-center flex justify-around flex-col h-[70px]"><FaImage className="text-[30px] cursor-pointer" /></label>
                                        <input
                                            onChange={(e) => handleUpload(e)}
                                            type="file"
                                            id="file"
                                            name="file"
                                            className="hidden"
                                        />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label htmlFor="matn" className="leading-7 text-sm text-gray-600">To'liq ma'lumot</label>
                                        <textarea
                                            value={matn}
                                            onChange={(e) => setMatn(e.target.value)}
                                            id="matn"
                                            name="matn"
                                            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="p-2 m-auto">
                                    {show ? (
                                        <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={cartCreate}>Create</button>
                                    ) : (
                                        <button className="border px-4 py-2 mt-2 mb-6 bg-green-400 text-white rounded" onClick={cartUpdate}>Update</button>
                                    )}
                                    <br /><br />
                                </div>
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
                            <h1>Sarlavha</h1>
                            <h1>O'zgartirish</h1>
                            <h1>O'chirish</h1>
                        </div>
                        <hr className="border-black mt-3" />
                    </div>
                    <div className="flex flex-wrap -m-[-1%]">
                        {blog.map((item, index) => (
                            <Fragment key={index}>
                                <div className="mt-3 w-full flex justify-between items-center mb-3">
                                    <img className="w-[10%] h-[70%] max-sm:h-auto" src={item.img} alt={item.title} />
                                    <b className="w-[10%] text-center ml-[-9%] max-sm:text-[13px] max-sm:ml-[-5%]">{item.title}</b>
                                    {/* <p className="w-[200px] h-[100px] overflow-y-scroll">{item.matn}</p> */}
                                    <FiEdit className="text-[25px] text-blue-500 w-16 text-center cursor-pointer" onClick={() => cartEdit(item.img, item.title, item.matn, item.id)} />
                                    <MdDelete className="text-[25px] text-blue-500 w-16 text-center cursor-pointer" onClick={() => cartDelete(item.id)} />
                                </div>
                            </Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewsDash;
