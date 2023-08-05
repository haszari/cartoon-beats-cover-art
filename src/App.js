import React from 'react';
import './App.scss';

import Background from './components/background';
import TitleLine from './components/title-line';
import MixerLogo from './components/mixer-logo';
import CatalogueNumber from './components/catalogue-number';


function App() {
  return (
    <div className="App">
      <>
        <Background className='coming-on'>
          <div className='ep-title'>
            <TitleLine text={ 'It Was Coming On' } />
            {/* <TitleLine text={ 'Coming On' } start='white' /> */}
          </div>
          <MixerLogo colors={ {
            top: '#92f8ff',
            middle: '#aaf5b4',
            bottom: '#db02a9',
          } } />
          <CatalogueNumber index='12' />
        </Background>
      </>
      <div className='elements'>
        <div className='ep-title'>
          <TitleLine text={ 'It Was Coming On' } />
          {/* <TitleLine text={ 'Coming On' } start='white' /> */}
        </div>
        <MixerLogo colors={ {
          top: '#92f8ff',
          middle: '#aaf5b4',
          bottom: '#db02a9',
        } } />
        <CatalogueNumber index='12' />
      </div>
    </div>
  );
}

export default App;
