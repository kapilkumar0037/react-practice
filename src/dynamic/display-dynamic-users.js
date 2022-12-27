function DisplayUsers({data}){
    console.log(data);
    return (
        <div>
            <table>
                {data.map(x=> 
                    <tr>
                        <td>{x.login}</td>
                    </tr>)}
            </table>
        </div>
    )
}

export default DisplayUsers;