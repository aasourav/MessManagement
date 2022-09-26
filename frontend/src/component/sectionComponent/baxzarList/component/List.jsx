export default function List({lists}){
        return(
            <>
                {lists.map(()=>(
                    <tr key={Math.random()}>
                        <td key={Math.random()}>10/12/2022</td>
                        <td key={Math.random()}>Arirfur Rahman</td>
                        <td key={Math.random()}>1200</td>
                    </tr>
                ))}
            </>
        )
}