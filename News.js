import React from 'react';
import {
        BrowserRouter,
        Route,
        Switch,
        Redirect
    } from 'react-router-dom';
import TopStories from './TopStories';
import NewStories from './NewStories';
import BestStories from './BestStories';
import Main from './Main';

function News(props) {
    return (
        <div>
            <BrowserRouter>
            <Route path="/" component={Main}></Route>
                <Route path="/TopStories" component={TopStories} />
                <Route path="/NewStories" component={NewStories} />
                <Route path="/BestStories" component={BestStories}/>
        </BrowserRouter>
        </div>
    );
}

export default News;


