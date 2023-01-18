import React, { useState, useEffect } from 'react';
import { db } from "./firebase";
import { useNavigate } from "react-router-dom";
import { collection, onSnapshot } from "firebase/firestore";
import "./profile.css";
import { motion } from 'framer-motion';

import { FaCog, FaUser, FaSignOutAlt,} from "react-icons/fa";


const loaderVariants = {
    animationOne: {
        x: [-20, 20],
        y: [0, -30],
        transition: {
            x: {
                yoyo: Infinity,
                duration: 0.5
            },
            y: {
                yoyo: Infinity,
                duration: 0.25,
                ease: 'easeOut'
            }
        }
    }
}

const Icon = ({ icon }) => (
    <li>
      <p href="">{icon}</p>
    </li>
  );


const Home = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [signedIn, setSignedIn] = useState(false);
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [auth, setAuth] = useState("");

    /* useEffect(() => {
        setLoading(true);
        const unsub = onSnapshot(collection(db, "events"), (snapshot) => {
            const list = [];
            snapshot.docs.forEach((doc) => {
                list.push({ id: doc.id, ...doc.data() })
            });
            setEvents(list);
            setLoading(false);
        },
            (error) => {
                console.log(error);
            }
        );

        return () => {
            unsub();
        };
    }, []); */

    useEffect(() => {
        const localAuth = localStorage.getItem("auth");
        if (localAuth) {
          setSignedIn(true);
          setAuth(localAuth);
          setEmail(localStorage.getItem("email"))
        }
      }, []);


    return (
        <>
            <section>
                <section>
                    <section className="profile-container">
                        {loading ? <motion.div variants={loaderVariants} animate="animationOne" className="updating-ball"></motion.div> : (
                            <article>
                                <article>
                                        <summary>
                                            <Icon icon={<FaUser title="Your Administrator Profile"/>} />
                                            <section className="profile-details">
                                                <p className="profile-loc">Email: {email}</p>
                                                <p className="profile-loc">Date Of Birth: 1-1-1997</p>
                                                <p className="profile-loc">Location: Bibliothèque Marie Curie</p>
                                                <button onClick={() => {localStorage.clear(); navigate(`/`); window.location.reload(false);}} className="profile-btn">Se déconnecter</button>
                                            </section>
                                        </summary>
                                    </article>
                            </article>
                        )}
                    </section>
                </section>
            </section>
        </>
    )
}

export default Home 