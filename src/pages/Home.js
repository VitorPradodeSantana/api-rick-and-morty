import React, { useState, useRef } from 'react'
import Button from '../components/Button'
import EpisodiosHome from '../components/EpisodiosHome'
import Links from '../components/Links'
import imagemRickAndMorty from './../assets/img/imagem-main-rick-and-morty.png'
import { IoMailOutline } from 'react-icons/io5'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithubSquare } from 'react-icons/fa'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

import { FreeMode, Pagination } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

export default function Home() {
  const [personagens, setPersonagens] = useState([])
  const [episodios, setEpisodios] = useState([])

  React.useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(res => res.json())
      .then(response => {
        let data = response.results
        setPersonagens(data)
        console.log(personagens)
      })
  }, [])

  React.useEffect(() => {
    fetch('https://rickandmortyapi.com/api/episode')
      .then(res => res.json())
      .then(response => {
        let data = response.results
        setEpisodios(data)
        console.log(episodios)
      })
  }, [])

  return (
    <div>
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

      <div></div>
      <section id="personagens" className="container">
        <h2>Personagens</h2>
        <div className="div-personagens">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
            navigation={true}
          >
            {personagens.map(personagem => (
              <SwiperSlide>
                <div className="card-peronsagens">
                  <img src={personagem.image} />
                  <h4>{personagem.name}</h4>
                  <span>{personagem.species}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <section id="episodios" className="container">
        <h2>Episodios</h2>
        <div>
          <Swiper
            spaceBetween={20}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={swiper => console.log(swiper)}
          >
            {episodios.map(episodio => (
              <SwiperSlide key={episodio.id}>
                <div className="div-video">
                  <img src="https://tvcdn.fancaps.net/2637475.jpg" />
                  <h2>{episodio.name}</h2>
                  <span>{episodio.episode}</span>
                  <p>{episodio.air_date}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <section id="contato">
        <h2>Contato</h2>
        <ul>
          <li>
            <i>
              <IoMailOutline />
            </i>
            <p>vitor_shotokan@hotmail.com</p>
          </li>
          <li>
            <i>
              <FaLinkedin />
            </i>
            <p>https://www.linkedin.com/in/vitorpradodesantana/</p>
          </li>
          <li>
            <i>
              <FaGithubSquare />
            </i>
            <p>https://github.com/VitorPradodeSantana</p>
          </li>
        </ul>
      </section>
    </div>
  )
}
