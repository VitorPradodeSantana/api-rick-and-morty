import React, { useState } from 'react'
import imagemRickAndMorty from './../assets/img/imagem-main-rick-and-morty.png'
import { FaWindowClose } from 'react-icons/fa'
import Modal from 'react-modal'
import { FaSearch } from 'react-icons/fa'

Modal.setAppElement('#root')

export default function Episodios() {
  const [episodios, setEpisodios] = useState([])
  const [modalIsOpen, setIsOpen] = React.useState(false)
  const [episodio, setEpisodio] = useState('')
  const [searchInput, setSearchInput] = useState('')
  const [filteredResults, setFilteredResults] = useState([])

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'rgb(00, 00, 00)',
      color: '#fff'
    }
  }

  const searchItems = searchValue => {
    setSearchInput(searchValue)
    if (searchInput !== '') {
      const personagensFiltrado = episodios.filter(item => {
        return Object.values(item)
          .join('')
          .toLowerCase()
          .includes(searchInput.toLowerCase())
      })
      setFilteredResults(personagensFiltrado)

      console.log(filteredResults)
    } else {
      setFilteredResults(episodios)
    }
  }

  React.useEffect(() => {
    fetch('https://rickandmortyapi.com/api/episode')
      .then(res => res.json())
      .then(response => {
        let data = response.results
        setEpisodios(data)
        console.log(episodios)
      })
  }, [])

  function openModal(event) {
    const el = event.target.parentNode
    const elementoId = el.getAttribute('id')
    fetch('https://rickandmortyapi.com/api/episode/' + elementoId)
      .then(res => res.json())
      .then(response => {
        setEpisodio(response)
        console.log(episodio)
      })
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <main className="page-episodios">
      <div className="pesquisa">
        <input
          type="text"
          placeholder="Faça sua pesquisa"
          onChange={e => searchItems(e.target.value)}
        />
        <button>
          <i>
            <FaSearch />
          </i>
        </button>
      </div>

      <div>
        {searchInput.length > 1
          ? filteredResults.map(item => {
              return (
                <div className="card-episodio">
                  <img src="https://tvcdn.fancaps.net/2637475.jpg" />
                  <div id={item.id}>
                    <span>{item.name}</span>
                    <span>{item.episode}</span>
                    <span>{item.air_date}</span>
                    <button onClick={openModal}>Saiba mais</button>
                  </div>
                </div>
              )
            })
          : episodios.map(item => {
              return (
                <div className="card-episodio">
                  <img src="https://tvcdn.fancaps.net/2637475.jpg" />
                  <div id={item.id}>
                    <span>{item.name}</span>
                    <span>{item.episode}</span>
                    <span>{item.air_date}</span>
                    <button onClick={openModal}>Saiba mais</button>
                  </div>
                </div>
              )
            })}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <img
          src="https://tvcdn.fancaps.net/2637475.jpg"
          alt="imagem-rick-and-morty"
          height="200"
          width="300"
        />
        <h2>{episodio.name}</h2>
        <p>{episodio.air_date}</p>
        <p>{episodio.episode}</p>
        <button onClick={closeModal}>
          <FaWindowClose />
        </button>
      </Modal>
    </main>
  )
}
