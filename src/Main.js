import React from 'react';
import {
    Link
} from 'react-router-dom'; 
import TopStories from './TopStories';
import {NavLink} from 'react-router-dom'
function Main(props) {


    console.log('props', props);

    return (
        <React.Fragment>
        <div>
            <header>
            <h1> News App</h1>
            <NavLink to="/BestStories">
                <button>BestStories</button>
            </NavLink>&emsp;
            <NavLink to="/TopStories">
                <button>TopStories</button>
            </NavLink>&emsp;
            <NavLink to="/NewStories">
                <button>NewStories</button>
            </NavLink>
            </header>
        </div>
        </React.Fragment>
    );
}

export default Main;
