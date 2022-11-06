import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import fotoPerfil from './../assets/img/foto.jpg'

export default function Contato() {
  return (
    <main className="page-contato">
      <h3>Contato</h3>
      <img src={fotoPerfil} alt="imagem-de-perfil" />
      <p>
        Me chamo Vitor Prado de Santana, atualmente estou desenvolvendo
        aplicações com REACT, esta aplicação foi feita com REACT, foi utilizado
        components como o MODAL e bibliotecas externas como o swiper para o
        CAROUSEL, irei deixar o link abaixo para que entrem em contato comigo
        através das minhas redes podem inclusive abrir uma issue no meu
        repositório e me dar algum feedback estou aberto para negociações kkkk
        tamo junto galera.
      </p>

      <div>
        <h4>Linkedin</h4>
        <a
          href="https://www.linkedin.com/in/vitorpradodesantana/"
          className="linkedin"
        >
          linkedin
        </a>
      </div>
      <div>
        <h4>GitHub</h4>
        <a href="https://github.com/VitorPradodeSantana/api-rick-and-morty">
          github
        </a>
      </div>
    </main>
  )
}
