import './App.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
// import * as Vibrant from 'node-vibrant';

// function getPalette() {
//   Vibrant.from('./images/test.jpg').getPalette((err, palette) => console.log(palette))
// }

function App() {
  return (
    <HelmetProvider>
      <div className="App" >
        <Helmet>
          <style>{'body { background-color: black; }'}</style>
        </Helmet>
        {/* <button onClick={ () => getPalette() }></button> */}
      </div>
    </HelmetProvider>
  );
}

export default App;
