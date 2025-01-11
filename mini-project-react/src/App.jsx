import { useState } from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import WeatherApp from './WeatherApp';

function App() {
  let handleClick = () => {
    console.log('Button clicked');
  }
  return (
    <>
      <WeatherApp />
    </>
  )
}

export default App
