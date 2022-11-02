import cabecaDePicles from './../assets/img/cabeca-de-picles.png'
import './../App.css'

export default function PersonagensHome() {
  return (
    <div className="card-peronsagens">
      <img src={cabecaDePicles} />
      <h4>Cabela de Picles</h4>
      <span>Alguma informação</span>
    </div>
  )
}
