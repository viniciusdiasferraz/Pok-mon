import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/index.js'
import Pokemons from './pages/pokemons/todospokemons.js'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/todospokemons' element={<Pokemons />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
