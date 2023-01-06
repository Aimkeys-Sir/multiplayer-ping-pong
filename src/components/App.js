import { useEffect } from 'react';
import '../styles/App.css';
import {canvas} from '../gameloop/game'

function App() {
  useEffect(()=>{
    const app = document.querySelector('.App')
    app.appendChild(canvas)
  },[])
  return (
    <div className="App">
    </div>
  );
}

export default App;
