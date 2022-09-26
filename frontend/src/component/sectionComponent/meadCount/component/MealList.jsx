export default function MealList({lists}){
    return(
        <>
            {lists.map(()=>(
            <tr key={Math.random()}>
                <td key={Math.random()}>12/16/2022</td>
                <td key={Math.random()}>1.4</td>
                <td key={Math.random()}>1.4</td>
                <td key={Math.random()}>1.4</td>
            </tr>
        ))}
        </>
        
    )
}