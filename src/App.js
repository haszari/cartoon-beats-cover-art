import React from 'react';
import './App.css';

import Background from './components/background';
import TitleLine from './components/title-line';
import MixerLogo from './components/mixer-logo';
import CatalogueNumber from './components/catalogue-number';


function App() {
  return (
    <div className="App">
      <Background color='red'>
        <div className='ep-title'>
          <TitleLine text={ 'Redline' } />
          <TitleLine text={ 'Train' } start='white' />
        </div>
        <MixerLogo colors={ { 
          top: '#fef435', 
          middle: '#b31708', 
          bottom: '#503502',
        } } />
        <CatalogueNumber index='7' />
      </Background>
    </div>
  );
}

export default App;
