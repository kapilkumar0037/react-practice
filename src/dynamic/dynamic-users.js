import { useEffect, useState } from "react";
import { useFetch } from "../hooks/use-fetch";
import DisplayUsers from "./display-dynamic-users";

function DynamicUsers() {
    // const [data, setData] = useState(null);
    // const [error, setError] = useState(null);
    // const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //     setLoading(true);
    //     setTimeout(()=>{
    //         fetch('https://api.github.com/users')
    //         .then((res) => res.json())
    //         .then(setData)
    //         .then(setLoading(false))
    //         .catch(setError);
    //     },1000)
      
    // }, []);
    const {data, loading, error}=useFetch('https://api.github.com/users');
    console.log(data);
    if (loading) return (<h1>Loading...</h1>);
    if (error) return (<h1>{error}</h1>);

    if (data) {
        return (
            <DisplayUsers data={data} />
        )
    }
    return <h1>Dynamic Data</h1>
}

export default DynamicUsers;