import './App.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import * as Vibrant from 'node-vibrant';
import { useState, useEffect } from 'react';

function App() {
  let [backgroundColor, setBackgroundColor] = useState('html { background-color: black; }');

  async function getPalette() {
    //TODO:
    //TODO grab images uploaded from database
    setBackgroundColor(Vibrant.from('./images/test.jpg').getPalette((err, palette) => console.log(`html { background-color: rgb(${palette.Vibrant.rgb.toString()}); }`)))
    await console.log(getPalette())
  }

  useEffect(() => {
    getPalette()
  }, []);

  return (
    <HelmetProvider>
      <div className="App" >
        <Helmet>
          <style>{'body { background-color: black; }'}</style>
        </Helmet>
      </div>
    </HelmetProvider>
  );
}

export default App;
