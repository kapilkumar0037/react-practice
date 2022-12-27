
import './App.css';
import FormPractice from './form/form';
import CustomHooks from './hooks/custom-hooks';
import { useState, useEffect } from 'react';
import DynamicUsers from './dynamic/dynamic-users';

function App() {
  const [emotion, setEmotion] = useState("Happy");
  const [secondary, setSecondaryEmotion] = useState("Tired");

  useEffect(()=>{
    console.log(`It's ${emotion} right now`);
  },[emotion]);
  useEffect(()=>{
    console.log(`It's ${secondary} right now`);
  },[secondary]);
  return (
    <div className="App">
      <h1>Current emotion is {emotion}</h1>
      <button onClick={() => setEmotion('Sad')}>Sad</button>
      <button onClick={() => setEmotion('Excited')}>Excited</button>
    <h2>Current secondary emotion is {secondary}</h2>
    <button onClick={()=> setSecondaryEmotion('Energetic')}>Energetic</button>
    {/* Form */}
    {/* <FormPractice /><br></br>
    <label>Custom Hooks</label>
    <CustomHooks></CustomHooks> */}
    <label>Dynamic Data</label>
    <DynamicUsers />
    </div>
  );
}

export default App;
