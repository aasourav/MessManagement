import React from "react";
import './app.css';
import Header from "./component/headerComponent/Header";
import Home from "./component/sectionComponent/Home";

export default class App extends React.Component{
    render(){
        return(
           <div>
                <Header/>
                <Home/>
           </div>
        )
    }
}