import Button from '../components/Button'
import EpisodiosHome from '../components/EpisodiosHome'
import Links from '../components/Links'
import PersonagensHome from '../components/PersonagensHome'
import imagemRickAndMorty from './../assets/img/imagem-main-rick-and-morty.png'

export default function Home() {
  return (
    <body>
      <main className="principal">
        <div>
          <p>Utilizando a API do Rick and Morty</p>
          <div className="div-btns-home">
            <Button texto="Personagens" />
            <Button texto="Episodios" />
          </div>
        </div>
        <div>
          <img src={imagemRickAndMorty} />
        </div>
      </main>
      <section id="personagens">
        <h2>Personagens</h2>
        <div className="div-personagens">
          <PersonagensHome />
          <PersonagensHome />
          <PersonagensHome />
        </div>
      </section>
      <section id="episodios">
        <h2>Episodios</h2>
        <div>
          <EpisodiosHome />
          <EpisodiosHome />
          <EpisodiosHome />
        </div>
      </section>
      <section id="contato">
        <h2>Contato</h2>
        <ul>
          <li>
            <i></i>
            <p>vitor_shotokan@hotmail.com</p>
          </li>
          <li>
            <i></i>
            <p>https://www.linkedin.com/in/vitorpradodesantana/</p>
          </li>
          <li>
            <i></i>
            <p>https://github.com/VitorPradodeSantana</p>
          </li>
        </ul>
      </section>
    </body>
  )
}
