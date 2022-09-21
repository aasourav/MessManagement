import React from "react";
import './home.css';
import MembersTable from "./membersTable/MembersTable";

export default class Home extends React.Component{
    render(){
        const arr = [1,2,3,4,5]
        return(
            <div className="main">
                <div className="homeHeader">
                    <h3>Meal Rate:</h3>
                    <h3>Total Meal:</h3>
                    <h3>Total Expense:</h3>
                    <h3>Meal Rate:</h3>
                </div>
                <table>
                    <caption>
                        <h3>Members Shortcut Information View</h3>
                    </caption>
                    <tr>
                        <th>Name</th>
                        <th>Deposit</th>
                        <th>Expense</th>
                        <th>Total Consumed Meal</th>
                        <th>Comment</th>
                    </tr>
                    <MembersTable members={arr}/>
                </table>
            </div>
        )
    }
}