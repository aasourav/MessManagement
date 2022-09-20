import React from "react";
import './app.css';
import Header from "./component/headerComponent/Header";

export default class App extends React.Component{
    render(){
        return(
           <div>
                <Header/>
           </div>
        )
    }
}