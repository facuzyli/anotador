import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Truco from './components/Truco';

function App() {
  return (
    <Router>
      <div>
        <Menu />
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/truco' element={<Truco />} />
          {/* Puedes agregar más rutas para otros juegos aquí */}
        </Routes>
      </div>
    </Router>
  );
}

function Menu() {
  return (
    <nav>
      <Link to='/'>Inicio</Link>
      <Link to='/truco'>Truco</Link>
      {/* Puedes agregar más enlaces para otros juegos aquí */}
    </nav>
  );
}

function Inicio() {
  return <h1>Selecciona un Juego desde el Menú</h1>;
}

export default App;