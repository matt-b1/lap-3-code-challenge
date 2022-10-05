import { Routes, Route } from 'react-router-dom';

import './App.css';
import {Header} from './Layout'
import {Home, About } from './Pages'
import {Repos} from './components'

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/search' element={<Repos/>} />
      </Routes>
    </div>
  );
}

export default App;
