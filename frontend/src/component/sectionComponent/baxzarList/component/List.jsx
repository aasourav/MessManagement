export default function List({lists}){
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