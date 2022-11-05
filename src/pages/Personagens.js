import React, { useState, useRef, useEffect } from 'react'
import './../App.css'
import { FaSearch } from 'react-icons/fa'
import Modal from 'react-modal'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}

Modal.setAppElement('#root')

export default function Personagens() {
  const [personagens, setPersonagens] = useState([])
  const [modalIsOpen, setIsOpen] = React.useState(false)

  function openModal(id) {
    console.log(id)
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
        console.log(personagens)
      })
  }, [])

  return (
    <main id="pagina-personagens" className="container">
      <div className="pesquisa">
        <input type="text" placeholder="Faça sua pesquisa" />
        <button>
          <i>
            <FaSearch />
          </i>
        </button>
      </div>
      <h2>Personagens</h2>

      <div className="caixa-personagem-page">
        {personagens.map(personagem => (
          <div className="card-peronsagens">
            <img src={personagem.image} />
            <h4>{personagem.name}</h4>
            <span>{personagem.species}</span>
            <button onClick={openModal()}>Abrir modal</button>
          </div>
        ))}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>Hello</h2>

        <div>I am a modal</div>
        <button onClick={closeModal}>close</button>
      </Modal>
    </main>
  )
}
