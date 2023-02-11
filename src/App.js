import './App.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import * as Vibrant from 'node-vibrant';
import { useState, useEffect } from 'react';

function App() {
  let [backgroundColor, setBackgroundColor] = useState('html { background-color: black; }');

  async function getPalette() {
    //TODO:
    //TODO grab images uploaded from database
    await setBackgroundColor(Vibrant.from('./images/test.jpg').getPalette((err, palette) => setBackgroundColor(palette.Vibrant.rgb.toString())))
    
  }

  useEffect(() => {
    getPalette()
  }, []);

  return (
    <HelmetProvider>
      <div className="App" >
        <Helmet>
          <style>{ backgroundColor ? `html { background: radial-gradient(rgb(${backgroundColor}) -200%, black 120%);` : 'html { background: black; }' }</style>
        </Helmet>
      </div>
    </HelmetProvider>
  );
}

export default App;
