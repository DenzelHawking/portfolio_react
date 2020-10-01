import React, { useState } from 'react';

import Menu from './components/menu/Menu';
import Content from './components/content/Content';
import './App.css';

function App() {
  let [side, setSide] = useState('content__tab-cube')

  let rotateSide = ['top', 'bottom', 'left', 'right'];
  let mainLocation = window.location.hash.slice(1);
  let previousLocation = mainLocation;

  function getRotateSide(currantLocation) {
    if (previousLocation === currantLocation) return;
    previousLocation = currantLocation;

    let randomNumber = Math.floor(Math.random() * 4);

    setSide(`content__tab-cube next-tab__${rotateSide[randomNumber]}`)
    setTimeout(() => setSide('content__tab-cube'), 2000);
  }

  return (
    <div>
      <Menu setSide={getRotateSide} />
      <Content moveSide={side} />
    </div>
  );
}

export default App;
