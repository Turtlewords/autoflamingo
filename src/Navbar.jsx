import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from 'react-icons/ai'
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "../App.css";
import { IconContext } from "react-icons";

function NavBar() {
    return (
        <>
        <IconContext.Provider value={{color: "undefined"}}>
            <div className="navbar">
                <FaIcons.FaBars onClick={showSidebar}>

                </FaIcons.FaBars>
            </div>
        </IconContext.Provider>
        </>
    )
}