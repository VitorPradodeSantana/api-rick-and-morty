import React, { useState, useRef, useEffect } from 'react'
import './../App.css'
import { FaSearch } from 'react-icons/fa'
import Modal from 'react-modal'
import { FaWindowClose } from 'react-icons/fa'

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

Modal.setAppElement('#root')

export default function Personagens() {
  const [personagens, setPersonagens] = useState([])
  const [modalIsOpen, setIsOpen] = React.useState(false)
  const [personagem, setPersonagem] = useState({ id: '1' })
  const [searchInput, setSearchInput] = useState('')
  const [filteredResults, setFilteredResults] = useState([])

  const searchItems = searchValue => {
    setSearchInput(searchValue)
    if (searchInput !== '') {
      const personagensFiltrado = personagens.filter(item => {
        return Object.values(item)
          .join('')
          .toLowerCase()
          .includes(searchInput.toLowerCase())
      })
      setFilteredResults(personagensFiltrado)

      console.log(filteredResults)
    } else {
      setFilteredResults(personagens)
    }
  }

  function openModal(event) {
    const el = event.target.parentNode
    const elementoId = el.getAttribute('id')
    fetch('https://rickandmortyapi.com/api/character/' + elementoId)
      .then(res => res.json())
      .then(response => {
        setPersonagem(response)
        console.log(personagem)
      })
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  React.useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(res => res.json())
      .then(response => {
        let data = response.results
        setPersonagens(data)
      })
  }, [])

  console.log(searchInput)

  return (
    <main id="pagina-personagens" className="container">
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
      <h2>Personagens</h2>
      <div className="caixa-personagem-page">
        {searchInput.length > 1
          ? (filteredResults.map(personagem => {
              return (<div
                className="card-peronsagens"
                id={personagem.id}
                key={personagem.id}
              >
                <img src={personagem.image} />
                <h4>{personagem.name}</h4>
                <span>{personagem.species}</span>
                <button onClick={openModal}>Abrir modal</button>
              </div>
              )
            }))
          : (personagens.map(personagem => {
              return (
              <div
                className="card-peronsagens"
                id={personagem.id}
                key={personagem.id}
              >
                <img src={personagem.image} />
                <h4>{personagem.name}</h4>
                <span>{personagem.species}</span>
                <button onClick={openModal}>Abrir modal</button>
              </div>
              )
            }))
          }
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <img src={personagem.image} />
        <h2>{personagem.name}</h2>
        <p>{personagem.species}</p>
        <p>{personagem.gender}</p>
        <p>{personagem.status}</p>
        <button onClick={closeModal}>
          <FaWindowClose />
        </button>
      </Modal>
    </main>
  )
}
