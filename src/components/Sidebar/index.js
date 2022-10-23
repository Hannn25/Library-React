import React, { useState } from 'react';
import {FaBars}from "react-icons/fa";
import '../../styles/Sidebar.css'
import Profile from '../Profile';
import Sidenav from '../Sidenav';

const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    // eslint-disable-next-line
    const menuItem=[
    // eslint-disable-next-line
        
    ]
    return (
        <div className="d-flex container-fluid">
        <div style={{width: isOpen ? "300px" : "50px"}} className="sidebar">
            <div className="top_section">
                <div style={{marginLeft: isOpen ? "200px" : "0px"}} className="bars">
                    <FaBars onClick={toggle}/>
                </div>
            </div>
     <div style={{display: isOpen ? "block" : "none"}} className="content-side">
        <Profile />
       <Sidenav />
   </div>
 </div>
        <main>{children}</main>
</div>
 );
};
export default Sidebar;
