import React, { useEffect, useState }  from 'react';
import UseStories from './UseStories';


function BestStories(props) {

    const[stories,dataFetched,error]=UseStories('beststories');
    if (dataFetched) {  
             if (!error) {
                    return (
                        <div>
                            <h1> BestStories</h1>
                            <ul>
                            {stories && stories.map(p=>(
                                <li key={p.data.id}>
                                    <a href={p.data.url}>{p.data.title}</a> 
                                    <p>Author: {p.data.by}</p>
                                </li>
                            ))} 
                        </ul> 
                        </div>
                    ) 
                } else {
                    return <h1>{error}</h1>
                }
            } else {
                return <h1>Loading...</h1>
            }
}

export default BestStories;