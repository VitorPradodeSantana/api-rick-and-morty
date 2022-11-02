import iconeLogo from './../assets/img/icone-rick-and-morty.png'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './../pages/Home'
import Personagens from './../pages/Personagens'
import Contato from './../pages/Contato'
import Episodios from './../pages/Episodios'

export default function Links() {
  return (
    <nav className="container">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Personagens">Personagens</Link>
        </li>
      </ul>
      <div>
        <img src={iconeLogo} placeholder="icone-logo-rick-and-morty" />
      </div>
      <ul>
        <li>
          <Link to="/Episodios">Episodios</Link>
        </li>
        <li>
          <Link to="/Contato">Contato</Link>
        </li>
      </ul>
    </nav>
  )
}
