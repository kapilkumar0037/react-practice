import { useEffect, useState } from "react";

export function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!url) return;
        fetch(url)
            .then((data) => data.json())
            .then(setData)
            .then(() => setLoading(false))
            .catch(setError)
    }, [url]);   
    return { data, loading, error };
}