import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Personagens">Personagens</Link>
        </li>
        <li>
          <Link to="/Episodios">Episodios</Link>
        </li>
        <li>
          <Link to="/Contato">Contato</Link>
        </li>
      </ul>
      <p>Feito com muito amor por Vitor Prado &copy;</p>
    </footer>
  )
}
