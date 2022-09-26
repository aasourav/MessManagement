import './bazar.css';
import List from "./component/List";
export default function Bazar(){
        const arr = [1,2,3,4,5]
        return(
            <div className="main">
                    <form action="">
                        <div className="inputData">
                            <h3>Input Data</h3>
                        </div>
                        <div className="fieldSet">
                            <fieldset>
                                <legend> <h3>Date</h3></legend>
                                <input type="date" name="" id="" />
                            </fieldset>
                            <fieldset>
                                <legend> <h3>Expenser Name</h3></legend>
                                <input type="text" name="" id="" />
                            </fieldset>
                            <fieldset>
                                <legend> <h3>Amount</h3></legend>
                                <input type="text" name="" id="" />
                            </fieldset>
                        </div>
                        <input className="submit" type="button" value="Submit" />
                    </form>
                    <table>
                        <caption>Bazar List</caption>
                        <tr>
                            <th>Date</th>
                            <th>Expenser Name</th>
                            {/*next update expenser name
                            will be in dropdown list */}
                            <th>Amount</th>
                        </tr>
                        <List lists={arr}/>
                        <tr>
                            <th colSpan={2}>Total</th>
                            <th>10000</th>
                        </tr>
                    </table>             
            </div>
        )
    
}