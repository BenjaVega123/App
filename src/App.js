import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutPage from './pages/AboutPage/AboutPage';

function App() {
  return (
  <div className='container'>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">Fukusuke Sushi-Delivery</a>
          <ul className="navbar-nav me-auto">
            <li className="nav-item" role="presentation">
              <a className="nav-link" href="/productos">Productos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/registro">Registrate</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/app/acerca">Sobre Nosotros</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/cart">Carrito de compras</a>
            </li>
          </ul>
        </div>
      </nav>
    <Routes>
      <Route path='/app/acerca' element={<AboutPage/>} />
    </Routes>
  </div>
  );
}

export default App;
