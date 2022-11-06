import React, { useState } from 'react'
import imagemRickAndMorty from './../assets/img/imagem-main-rick-and-morty.png'

export default function Episodios() {
  const [episodios, setEpisodios] = useState([])
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
    <main className="page-episodios">
      <h2>Episodios</h2>
      <div>
        {episodios.map(item => (
          <div className="card-episodio">
            <img src="https://tvcdn.fancaps.net/2637475.jpg" />
            <div>
              <span>{item.name}</span>
              <span>{item.episode}</span>
              <span>{item.air_date}</span>
              <button>Saiba mais</button>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
