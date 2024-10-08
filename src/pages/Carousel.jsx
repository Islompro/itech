import { Carousel as AntCarousel } from "antd";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";

function NewsCarousel() {
    const [blog, setBlog] = useState([]);

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

    const contentStyle = {
        width: "100%",
        height: "auto",
        color: "#fff",
        lineHeight: "500px",
        textAlign: "center",
        background: "",
    };

    return (
        <AntCarousel autoplay>
            {blog.map((data, index) => (
                <div key={data.id}>
                    <img
                        style={contentStyle}
                        className="rounded-xl aspect-[2/1] object-cover border-none"
                        src={data.img}
                        alt=""
                    />
                </div>
            ))}
        </AntCarousel>
    );
}

export default NewsCarousel;
