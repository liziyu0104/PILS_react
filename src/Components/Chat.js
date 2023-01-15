import React, { useState } from 'react';
import "./chat.css";
import img from "../img/chat.png";
import rep from "../img/sales-rep.png";
import { FaPlus, FaTimes } from "react-icons/fa";

import { IoSendSharp } from "react-icons/io5";

const Profile = () => {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

const Icon = ({ icon }) => (
  <li>
    <p href="">{icon}</p>
  </li>
);


    return (
        <>
            {modal && (
                <section className="modal animate">
                    <div onClick={toggleModal} className="overlay"></div>
                    <article className="modal-content">
                        <div className="rep-cont">
                            <img src={rep} className="rep-img" alt="sales rep"/>
                            <h3>Chat With xxx</h3>
                        </div>
                        {/* <div className="chat-box"><p>Hello User. How can I be of assistance to you?</p></div> */}
                        <input type="text" placeholder="Enter message here" className="message-box"></input><Icon icon={<IoSendSharp title="see the weather"/>} />
                        <button className="close-modal" onClick={toggleModal}>
                            <FaTimes />
                        </button>

                    </article>
                </section>
            )}
            
                <section className="chat-container">
                    <img src={img} className="chat-img" alt="user" />
                    {/* <h2 className="chat-name">Chat with our sales rep</h2> */}
                    {/* <p className="chat-locs">You're yet to start a conversation</p> */}

                    <button className="chat-btn" onClick={toggleModal} >suggestion? write us !</button>
                </section>

        </>
    )
}

export default Profile