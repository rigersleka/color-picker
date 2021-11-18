import React, { useState } from 'react';
import './App.css';

/** Import 2 main Components */
import SwatchesBottomPicker from './SwatchesBottomPicker';
import ShadePicker from './ShadePicker';

function App(props) {
  const [colorPicker, setColorPicker] = useState(props.baseColorState);

  const handleColorChange = (event) => {
    setColorPicker(event.rgb);
  };

  const copyClipboard = () => {
    navigator.clipboard.writeText(
      `rgb (${colorPicker.r}, ${colorPicker.g}, ${colorPicker.b})`
    );
  };

  return (
    <div className='App'>
      <div className='row'>
        <ShadePicker color={colorPicker} onChange={handleColorChange} />
      </div>

      <div className='row'>
        <SwatchesBottomPicker
          color={colorPicker}
          onChange={handleColorChange}
        />
      </div>
      <button onClick={copyClipboard}>Copy clipboard</button>
    </div>
  );
}

export default App;
