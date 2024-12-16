import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Ensure Routes is imported here
import './css/App.css';
import './css/nav.css';
import './css/loader.css';
import './css/movieDetail.css';
import './css/maincover.css';
import './css/movieCatalogue.css';
import Nav from './components/Nav.js';  // Correct import
import MainContent from './components/mainContent.js';  // Ensure the '.js' extension is included
import MovieDetail from './components/movieDetail';


function App() {
  const [watchList, setWatchList] = useState([]);

  useEffect(() => {
    getWatchListLocal();
  }, []);

  function getWatchListLocal() {
    if (localStorage.getItem('watchList') !== null) {
      setWatchList(JSON.parse(localStorage.getItem('watchList')));
    }
  }

  return (
    <div className="App">
      <Router>
        <Nav watchList={watchList} setWatchList={setWatchList} />
        <Routes> 
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route
            path="/"
            element={<MainContent 
            watchList={watchList}
            setWatchList={setWatchList} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
