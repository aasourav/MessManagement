import React from "react";
import './navbar.css';

export default class Navbar extends React.Component{
    render(){
        return(
            <div className="navbar">
                <input type="button" value="Add Data" />
                <input type="button" value="Bazar List" />
                <input type="button" value="Meal Count" />
                <input className="last" type="button" value="Home Page" />
            </div>
        )
    }
}