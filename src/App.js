import React, { useState }from 'react';
import ColorPicker from './components/ColorPicker';
import Header from './components/Header';
import ThicknessComponent from './components/Thickness';
import CanvasComponent from './components/Canvas';
import TransparencyComponent from './components/Transparency';
import EraserComponent from './components/Eraser';
import './App.css';

function App() {

  const [canvas, setCanvas] = useState('');

  return (
    <div className="App">
        <Header />
        <div className="contol-canvas-display">
            <div className="control-container">
                <ThicknessComponent />
                <TransparencyComponent />
                <EraserComponent canvas={canvas}/>
                <ColorPicker />
                <a className="footer-button" href="https://darleyinfo.vercel.app/">Back to Home</a>
            </div>
            <CanvasComponent setCanvas={setCanvas} />
        </div>
    </div>
  );
}

export default App;
