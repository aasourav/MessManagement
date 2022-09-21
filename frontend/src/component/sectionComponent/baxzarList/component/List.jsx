import React from "react";
export default class List extends React.Component{
    render(){
        const {lists} = this.props
        return(
            <>
                {lists.map(()=>(
                    <tr>
                        <td>10/12/2022</td>
                        <td>Arirfur Rahman</td>
                        <td>1200</td>
                    </tr>
                ))}
            </>
        )
    }
}