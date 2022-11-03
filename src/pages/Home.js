import React, { useState } from 'react'
import Button from '../components/Button'
import EpisodiosHome from '../components/EpisodiosHome'
import Links from '../components/Links'
import imagemRickAndMorty from './../assets/img/imagem-main-rick-and-morty.png'
import { IoMailOutline } from 'react-icons/io5'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithubSquare } from 'react-icons/fa'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

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

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
      <section id="personagens" className="container">
        <h2>Personagens</h2>
        <div className="div-personagens">
          {personagens.map(personagem => (
            <div className="card-peronsagens">
              <img src={personagem.image} />
              <h4>{personagem.name}</h4>
              <span>{personagem.species}</span>
            </div>
          ))}
        </div>
      </section>
      <section id="episodios" className="container">
        <h2>Episodios</h2>
        <div>
          {episodios.map(episodio => (
            <div className="div-video">
              <h2>{episodio.name}</h2>
              <span>{episodio.episode}</span>
              <p>{episodio.air_date}</p>
            </div>
          ))}
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
