import React, { useState, useEffect } from 'react';
import WatchListItem from './watchlistitem.js';

function Nav({ watchList, setWatchList }) {
    const [height, setHeight] = useState(0);
    const [isDarkMode, setIsDarkMode] = useState(false);

    
    function toggleHeight() {
        if (height === 0) setHeight(400);
        else setHeight(0);
    }


    function toggleDarkMode() {
        setIsDarkMode(!isDarkMode);
    }

  
    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [isDarkMode]);

    return (
        <div className={`nav ${isDarkMode ? 'dark' : ''}`}>

            <div className="main-nav">
                <div className="nav-logo">
                    <i className="fas fa-film"></i>
                    <span>Let's Watch</span>
                </div>
                <ul>
                    <li className="watch-list">
                        <i onClick={toggleHeight} className="fas fa-tv"></i>
                        {watchList.length === 0 ? "" : 
                            <span className="watch-list-length">{watchList.length}</span>}
                        <WatchListItem watchList={watchList} setWatchList={setWatchList} height={height} />
                    </li>
                </ul>
            </div>

            <div className="sub-nav">
                <p>WATCH MOVIES TRAILER . ENJOY WATCHING !</p>
            </div>

           
            <div className="dark-mode-toggle" onClick={toggleDarkMode}>
                <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}></i>
            </div>
        </div>
    );
}

export default Nav;
