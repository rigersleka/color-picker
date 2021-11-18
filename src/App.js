import React, { useState } from 'react';
import './App.css';

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
    <div className='root'>
      <div className='row'>
        <ShadePicker 
          color={colorPicker} 
          onChange={handleColorChange} />
      </div>

      <div className="App">
        <button onClick={copyClipboard}>Copy clipboard</button>
      </div>
    </div>
  );
}

export default App;
