import React from "react";
export default class MembersTable extends React.Component{
    render(){
        const {members} = this.props;
        return(
           <>
            {members.map(()=>(
                <tr key={Math.random()}>
                    <td>MD Ahsan Amin</td>
                    <td>10000</td>
                    <td>5000</td>
                    <td>30</td>
                    <td>Will Return 5000 taka</td>
                </tr>
            ))}
           </>
        )
    }
}