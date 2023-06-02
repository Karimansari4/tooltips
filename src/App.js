import { useState } from 'react';
import './App.css';
import Tooltips from './Tooltips';

function App() {

  const [positon, setPosition] = useState('right-tooltip')

  return (
    <div className="main">
      <h1 className='toolHeader'>React Tooltips</h1>
      <div className='btn-group-div'>
        <button className='btn' onClick={() => setPosition('left-tooltip')}>LEFT</button>
        <button className='btn' onClick={() => setPosition('right-tooltip')}>RIGHT</button>
        <button className='btn' onClick={() => setPosition('top-tooltip')}>TOP</button>
        <button className='btn' onClick={() => setPosition('bottom-tooltip')}>BOTTOM</button>
      </div>

      <center>
        <Tooltips positon={positon} />
      </center>
    </div>
  );
}

export default App;
