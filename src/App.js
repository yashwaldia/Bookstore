// App.js
import React from 'react';
import Homes from './components/Homes';
import RomCom from './components/RomCom';
import Navbartop from './components/Navbartop';
import Trending from './components/Trending';
import Comedy from './components/Comedy';
import Horror from './components/Horror';

const App = () => {
  return (
    <div>
      <Navbartop />
      <div id="home">
        <Homes />
      </div>
      <div id="Trending">
        <Trending />
      </div>
      <div id="RomCom">
        <RomCom />
      </div>
      <div id="comedy">
        <Comedy />
      </div>
      <div id="horror">
        <Horror />
      </div>
    </div>
  );
}

export default App;
