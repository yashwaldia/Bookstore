// App.js
// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homes from './components/Homes';
import RomCom from './components/RomCom';
import Navbartop from './components/Navbartop';
import Trending from './components/Trending';
import Comedy from './components/Comedy';
import Horror from './components/Horror';
import SearchResultsPage from './components/SearchResultsPage'; // Assuming you have a SearchPage component

const App = () => {
  return (
    <Router>
      <div>
        <Navbartop />
        <Routes>
          <Route path="/" element={<Homes />} />
          {/* <Route path="/Trending" element={<Trending />} />
          <Route path="/RomCom" element={<RomCom />} />
          <Route path="/comedy" element={<Comedy />} />
          <Route path="/horror" element={<Horror />} /> */}
          {/* Add more routes as needed */}
          <Route path="/search" element={<SearchResultsPage />} /> {/* Add a route for the search page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
