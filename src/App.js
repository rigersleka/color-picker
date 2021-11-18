import React, { useState } from 'react';
import './App.css';

import ShadePicker from './ShadePicker';

function App(props) {
  const [colorPicker, setColorPicker] = useState(props.baseColorState);

  const handleColorChange = (event) => {
    setColorPicker(event.rgb);
  };

  return (
    <div className='root'>
      <div className='row'>
        <ShadePicker 
          color={colorPicker} 
          onChange={handleColorChange} />
      </div>

    </div>
  );
}

export default App;
