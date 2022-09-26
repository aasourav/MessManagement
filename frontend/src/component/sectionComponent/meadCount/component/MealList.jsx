export default function MealList({lists}){
    return(
        <>
            {lists.map(()=>(
            <tr>
                <td>12/16/2022</td>
                <td>1.4</td>
                <td>1.4</td>
                <td>1.4</td>
            </tr>
        ))}
        </>
        
    )
}