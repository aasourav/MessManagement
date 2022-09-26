import './meal.css';
export default function Meal(){
        return(
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
                                <legend>
                                    <select name="" id="">
                                        <option value="">Arifrl</option>
                                        <option value="">Sourav</option>
                                        <option value="">Mannan</option>
                                    </select>
                                </legend>
                                <input type="text" name="" id="" />
                            </fieldset>
                            <fieldset>
                                <legend> <h3>Amount</h3></legend>
                                <input type="text" name="" id="" />
                            </fieldset>
                        </div>
                        <input className="submit" type="button" value="Submit" />
                    </form>
        )
}