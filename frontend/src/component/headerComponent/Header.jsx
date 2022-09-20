import React from "react";
import './header.css';
import Navbar from "./navbar/Navbar";
import Titlebar from "./titlebar/Titlebar";

export default class Header extends React.Component{
    render(){
        return(
           <div>
                <Titlebar/>
                <Navbar/>
           </div>
        )
    }
}