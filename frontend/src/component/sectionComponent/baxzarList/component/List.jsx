export default function List({lists}){
        if(!lists) return;
        return(
            <>
                {lists.map((v)=>(
                    <tr key={Math.random()}>
                        <td key={Math.random()}>{v.date}</td>
                        <td key={Math.random()}>{v.name}</td>
                        <td key={Math.random()}>{v.amount}</td>
                    </tr>
                ))}
            </>
        )
}