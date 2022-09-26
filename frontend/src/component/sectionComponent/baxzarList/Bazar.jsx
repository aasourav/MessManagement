import './bazar.css';
import List from "./component/List";
export default function Bazar(){
        const arr = [1,2,3,4,5]
        return(
            <div className="main">
                <div className='form_data'>
                    <form action="">
                                    
                         
                        <div className="fieldSet fset">
                                <fieldset>
                                    <legend> <h3>Date</h3></legend>
                                    <input type="date" name="" id="" />
                                </fieldset>
                                <fieldset>
                                <legend> <h3>Name</h3></legend>
                                    <select name="" id="">
                                        <option value="">Ariful</option>
                                        <option value="">Sourav</option>
                                        <option value="">Mannan</option>
                                    </select>
                                </fieldset>
                                <fieldset>
                                    <legend> <h3>Amount</h3></legend>
                                    <input type="text" name="" id="" />
                                </fieldset>
                            
                            
                        </div>
                        <input className="submit" type="button" value="Submit" />
                    </form>
                    <form action="">
                        <div className="fieldSet fset1">
                                <fieldset>
                                    <legend> <h3>Date</h3></legend>
                                    <input type="date" name="" id="" />
                                </fieldset>
                                <fieldset>
                                    <legend> <h3>Name</h3></legend>
                                    <select name="" id="">
                                        <option value="">Ariful</option>
                                        <option value="">Sourav</option>
                                        <option value="">Mannan</option>
                                    </select>
                                </fieldset>
                                <fieldset>
                                    <legend> <h3>Amount</h3></legend>
                                    <input type="text" name="" id="" />
                                </fieldset>
                        </div>
                        <input className="submit" type="button" value="Submit" />
                    </form>
                </div>
                <div className="table_data">
                    <table>
                        <caption>Bazar List</caption>
                        <tbody>
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
                        </tbody>
                        
                    </table>
                    <table>
                        <caption>Deposit Hisotory</caption>
                        <tbody>
                        <tr>
                            <th>Date</th>
                            <th>Name</th>
                            {/*next update expenser name
                            will be in dropdown list */}
                            <th>Amount</th>
                        </tr>
                        <List lists={arr}/>
                        <tr>
                            <td colSpan={2}>Total</td>
                            <td>10000</td>
                        </tr>
                        </tbody>
                        
                    </table>
                </div>  
                             
            </div>
        )
    
}