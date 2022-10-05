import { Routes, Route } from 'react-router-dom';

import './App.css';
import {Header} from './Layout'
import {Home, About } from './pages'

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
