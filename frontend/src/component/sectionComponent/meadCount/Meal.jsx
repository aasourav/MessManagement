import axios from 'axios';
import { useEffect, useState } from 'react';
import MealList from './component/MealList';
import './meal.css';
const sc = "tmatrix@19"
export default function Meal(){
        const [Data,setData] = useState({
            date:"",
            sourav:"",
            arif:"",
            mannan:"",
            secret:"",
        })
        const [lists,setLists] = useState()
        const handleSubmit = (e)=>{
            if(e.target.name === 'sourav'){
                setData({
                    ...Data,
                    sourav:e.target.value
                })
            }
            else if(e.target.name==='arif'){
                setData({
                    ...Data,
                    arif:e.target.value
                })
            }
            else if(e.target.name==='mannan'){
                setData({
                    ...Data,
                    mannan:e.target.value
                })
            }
            else if(e.target.name === 'date'){
                setData({
                    ...Data,
                    date:e.target.value
                })
                console.log(e.target.value)
            }
            else if(e.target.name==='secret'){
                setData({
                    ...Data,
                    secret:e.target.value
                })
            }
        }
        const Submit = async(e)=>{
            e.preventDefault()
            const {sourav,arif,mannan,date} = Data;
            
            const mealData = {
                date,
                sourav,
                arif,
                mannan
            }
            console.log(mealData)
            await axios.post('http://localhost:8800/meal',mealData)
            .then(res=>{
                console.log(res.data)
            })
            setData({
                date:"",
                sourav:"",
                arif:"",
                mannan:"",
                secret:"",
            })
        }

        useEffect(()=>{
            const fetchData = async()=>{
                const res = await axios.get('http://localhost:8800/meal');
                setLists(res)
            }
            fetchData();
        },[])
        if(lists){
             let sum = lists.data.map((v)=>(parseFloat(v.sourav)+parseFloat(v.mannan)+parseFloat(v.arif)))
             var Sum = 0;
             for(let i = 0 ; i<sum.length; i++){
                Sum += sum[i];
             }
        }
        return(
            <div>
                <form action="" onSubmit={Submit}>
                        <div className="fieldSet">
                            <fieldset>
                                <legend> <h3>Date</h3></legend>
                                <input onChange={handleSubmit} value={Data.date} type="date" name="date" id="" />
                            </fieldset>
                            <fieldset>
                                <legend>
                                    <h3>Input Meal</h3>
                                </legend>
                                <label htmlFor="">Sourav</label>
                                <input style={{width:'50px',marginLeft:'15px'}} onChange={handleSubmit} type="text" name="sourav" value={Data.sourav} />
                                <br/>
                                <label htmlFor="">Arif</label>
                                <input style={{width:'50px',marginLeft:'44px'}} onChange={handleSubmit} type="text" name="arif" value={Data.arif} />
                                <br/>
                                <label htmlFor="">Mannan</label>
                                <input style={{width:'50px',marginLeft:'5px'}} onChange={handleSubmit} type="text" name="mannan" value={Data.mannan} />
                            </fieldset>
                            <fieldset>
                                <legend> <h3>Secret Code</h3></legend>
                                <input onChange={handleSubmit} value={Data.secret} type="password" name="secret" id="" />
                            </fieldset>
                        </div>
                        {Data.secret === sc ? <input  className="submit" type="submit" value="Submit" /> : <p></p>}
                    </form>
                    <table>
                        <tbody>
                            <tr>
                                <th>Date</th>
                                <th>Sourav</th>
                                <th>Arif</th>
                                <th>Mannan</th>
                            </tr>
                            
                            {lists ? <MealList lists={lists.data}/> : null}
                            <tr>
                                <th colSpan={3}>Total Meal</th>
                                <th>{Sum ? Sum : '0'}</th>
                            </tr>
                        </tbody>
                        

                    </table>
            </div>
        )
}