export default function MealList({lists}){
    return(
        <>
            {lists.map((v)=>(
            <tr key={Math.random()}>
                <td key={Math.random()}>{v.date}</td>
                <td key={Math.random()}>{v.sourav}</td>
                <td key={Math.random()}>{v.arif}</td>
                <td key={Math.random()}>{v.mannan}</td>
            </tr>
        ))}
        </>
        
    )
}