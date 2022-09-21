import React from "react";
import './app.css';
import Header from "./component/headerComponent/Header";
import Bazar from "./component/sectionComponent/baxzarList/Bazar";

export default class App extends React.Component{
    render(){
        return(
           <div>
                <Header/>
                {/* <Home/> */}
                <Bazar/>
           </div>
        )
    }
}