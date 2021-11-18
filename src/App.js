import React, { useState } from 'react';
import './App.css';

function App(props) {
  const [colorPicker, setColorPicker] = useState(props.baseColorState);
  
  const copyClipboard = () => {
    navigator.clipboard.writeText(
      `rgb (${colorPicker.r}, ${colorPicker.g}, ${colorPicker.b})`
    );
  };


  return (
    <div className="App">
      <button onClick={copyClipboard}>Copy clipboard</button>
    </div>
  );
}

export default App;
