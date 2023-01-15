import React from "react";
import "./sidebar.css";
import logo from "../img/prime-logo.png";
import { FaCog, FaUser, FaSignOutAlt,} from "react-icons/fa";
import { IoLibrarySharp, IoChatbubbleEllipsesSharp, IoRestaurant, IoCafe, IoMusicalNotesSharp, IoPaw, IoNewspaper, IoNewspaperOutline,IoHardwareChipSharp,IoGrid, IoCloud,IoMail } from "react-icons/io5";
import { IoIosHelpCircle } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { Link } from 'react-router-dom';


const Icon = ({ icon }) => (
  <li>
    <p href="">{icon}</p>
  </li>
);


function SideBar() {
  return (
    <header>
      <img src={logo} alt="logo" />
      
      <ul className="top-menu">
        <Link to="/"><Icon icon={<IoLibrarySharp title="Lib to study"/>} /></Link>
        {/* <Link to="/chart"><Icon icon={<IoBarChart title="Statistic"/>} /></Link> */}
        <Link to="/home/weather"><Icon icon={<IoCloud title="see the weather"/>} /></Link>
        <Link to="/home/music"><Icon icon={<IoMusicalNotesSharp title="music"/>} /></Link>
        <Link to="/home/todo"><Icon icon={<IoNewspaper title="todo list"/>} /></Link>
        {/* <Link to="/cat"><Icon icon={<IoPaw title="work with cat"/>} /></Link> */}
        <Link to="/home/news"><Icon icon={<IoGrid title="news"/>} /></Link>
        {/* <Link to="/store"><Icon icon={<IoCafe title="Coffee Togo"/>} /></Link> */}
        {/* <Link to="/profile"><Icon icon={<FaUser title="Your Profile"/>} /></Link> */}
        {/* <Link to="/home/chat"><Icon icon={<IoMail title="Chat with sales rep"/>} /></Link> */}
        {/* <Link to="/home/help"><Icon icon={<IoIosHelpCircle title="FAQs"/>} /></Link> */}
        <Link to="/home/us"><Icon icon={<IoHardwareChipSharp title="about us"/>} /></Link>
        
        
        {/* <Icon icon={<FaCog title="Settings"/>} /> */}
      </ul>

      {/* <ul className="bottom-menu">
        <Icon icon={<FaSignOutAlt />} />
      </ul> */}
      
    </header>
  );
}


export default SideBar;
