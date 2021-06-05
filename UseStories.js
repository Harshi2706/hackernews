import React,{useEffect,useState} from 'react';
import axios from 'axios'
function UseStories(type) {
    const [dataFetched, setDataFetched] = useState(false);
    const [error, setError] = useState(null);
    const[stories,setstories]=useState(null)
    const [Topnews,setData]=useState(null);
    useEffect(() => {
        axios.get(` https://hacker-news.firebaseio.com/v0/${type}.json?print=pretty`)
            .then(async(response) => {
                setData(response.data)
                setError('');
                const stories=await Promise.all(response.data .slice(0,50).map(id => axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)))
                setstories(stories)
                setDataFetched(true);
            })
            .catch((err) => {
                setDataFetched(true);
                setError(err.toString());
            })
    }, [])
    return [stories,dataFetched,error];
}

export default UseStories;
