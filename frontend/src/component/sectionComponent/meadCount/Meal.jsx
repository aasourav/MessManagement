import MealList from './component/MealList';
import './meal.css';
export default function Meal(){
        const meal = [1,2,3,4,5,6]
        return(
            <div>
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
                                    <h3>Select Person</h3>
                                </legend>
                                <select name="" id="">
                                        <option value="">Ariful</option>
                                        <option value="">Sourav</option>
                                        <option value="">Mannan</option>
                                    </select>
                            </fieldset>
                            <fieldset>
                                <legend> <h3>Input Meal</h3></legend>
                                <input type="text" name="" id="" />
                            </fieldset>
                        </div>
                        <input className="submit" type="button" value="Submit" />
                    </form>
                    <table>
                        <tr>
                            <th>Date</th>
                            <th>Sourav</th>
                            <th>Arif</th>
                            <th>Mannan</th>
                        </tr>
                        <MealList lists={meal}/>
                        <tr>
                            <th colSpan={3}>Total Meal</th>
                            <th>1000</th>
                        </tr>

                    </table>
            </div>
        )
}