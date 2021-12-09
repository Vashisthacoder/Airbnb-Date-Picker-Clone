import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Search from './Search';






function App() {

  const [input, setInput] = useState(true)

  return (
    <div className="App">
      
   {input && <Search/>}
  

    <button onClick={() =>setInput(!input)}>click me</button>


    </div>
  );
}

export default App;
