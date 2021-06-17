import React, { useEffect, useState }  from 'react';
import UseStories from './UseStories';


 function NewStories(props) {
    
  const[stories,dataFetched,error]=UseStories('newstories');
    if (dataFetched) {  
             if (!error) {
              console.log(stories)
                    return (
                        <div>
                            <h1>Newstories</h1> 
                              <ul>
                            {stories && stories.map(p=>(
                                <li key={p.data.id}>
                                    <a href={p.data.url}>{p.data.title} </a>
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
                return <div>
                    <h1>Loading...</h1>
                </div>
            }
}

export default NewStories;