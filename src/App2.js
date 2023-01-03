
import './App.css';
import FormPractice from './form/form';
import CustomHooks from './hooks/custom-hooks';
import { useState, useEffect } from 'react';
import DynamicUsers from './dynamic/dynamic-users';
import { ExampleReducer } from './hooks/use-reducer';
import { ExampleUseRef } from './hooks/use-ref-ex';
import { ExampleContext } from './context/use-context';
import { TreeContext, tree } from './context/context-tut';

function App() {
  const [emotion, setEmotion] = useState("Happy");
  const [secondary, setSecondaryEmotion] = useState("Tired");

  useEffect(() => {
    console.log(`It's ${emotion} right now`);
  }, [emotion]);
  useEffect(() => {
    console.log(`It's ${secondary} right now`);
  }, [secondary]);
  return (
    <div className="App">
      <h1>Current emotion is {emotion}</h1>
      <button onClick={() => setEmotion('Sad')}>Sad</button>
      <button onClick={() => setEmotion('Excited')}>Excited</button>
      <h2>Current secondary emotion is {secondary}</h2>
      <button onClick={() => setSecondaryEmotion('Energetic')}>Energetic</button>
      {/* Form */}
      {/* <FormPractice /><br></br>
    <label>Custom Hooks</label>
    <CustomHooks></CustomHooks> */}
      <label>Dynamic Data</label>
      <DynamicUsers />
      <ExampleReducer />
      <ExampleUseRef />
      <TreeContext.Provider value={{ tree }}>
        <ExampleContext />
      </TreeContext.Provider>
    </div>
  );
}

export default App;
