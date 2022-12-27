import React, { useState, useEffect } from 'react';
import SwapiService from '../../services/swapi-service';
import './person-details.css';


const RandomCharacter = () => {
  const [state, setState] = useState({data: {}})
  const {id, name, birthYear, gender, mass, skin_color, hair_color, eyeColor, height} = state.data ;
  const characterImg = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
  const swapi = new SwapiService()///Данные с backend'da которые переходят в формат json

  const _updateCharacter = () => {
    const id = Math.floor(Math.random() * (20 - 1 + 1) + 1)
    swapi.getPerson(id)
    .then(data => {
      setState({data:data})
    })
  }
   useEffect(() => {
    _updateCharacter()
    setInterval(() => _updateCharacter(), 2000)


 }, [])

 console.log("EYE COLOR", state.data);

  return(
    
    <div className="random-planet jumbotron rounded">
        <img className="planet-image"
            src={characterImg} />
        <div>
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">hair_color</span>
              <span>{hair_color}</span>
            </li>
            <li className="list-group-item">
              <span className="term">birthYear</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className='list-group-item'>
              <span className='term'>mass</span>
              <span>{mass}</span>
            </li>
            <li className='list-group-item'>
              <span className='term'>skin_color</span>
              <span>{skin_color}</span>
            </li>
            <li className='list-group-item'>
              <span className='term'>height</span>
              <span>{height}</span>
            </li>
            <li className='list-group-iteam'>
              <span className='term'>eye_color  </span>
              <span>{eyeColor}</span>
            </li>
          </ul>
        </div>
      </div>
  )
}
export default RandomCharacter;




// export default class RandomCharacter extends Component {
// swapi = new SwapiService()

// state = {
//   data: {}
// }

// _updateCharacter = (id) => {
//   this.swapi.getPerson(id)
//   .then(data => {
//     this.setState({data: data})
//   })
// }

// componentDidMount = () => {

//   setInterval(() => {
//     const id = Math.floor(Math.random() * (20 - 1 + 1) + 1)
//     this._updateCharacter(id)
//   }, 2000)
 

// }


//   render() {

//     const {id, name, birthYear, gender, mass, skin_color, hair_color, homeworld, height} = this.state.data ;
//     const characterImg = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
//     return (
//       <div className="random-planet jumbotron rounded">
//         <img className="planet-image"
//              src={characterImg} />
//         <div>
//           <h4>{name}</h4>
//           <ul className="list-group list-group-flush">
//             <li className="list-group-item">
//               <span className="term">hair_color</span>
//               <span>{hair_color}</span>
//             </li>
//             <li className="list-group-item">
//               <span className="term">birthYear</span>
//               <span>{birthYear}</span>
//             </li>
//             <li className="list-group-item">
//               <span className="term">Gender</span>
//               <span>{gender}</span>
//             </li>
//             <li className='list-group-item'>
//               <span className='term'>mass</span>
//               <span>{mass}</span>
//             </li>
//             <li className='list-group-item'>
//               <span className='term'>skin_color</span>
//               <span>{skin_color}</span>
//             </li>
//             <li className='list-group-item'>
//               <span className='term'>height</span>
//               <span>{height}</span>
//             </li>
//             <li className='list-group-iteam'>
//               <span className='term'>homeworld  </span>
//               <span>{homeworld}</span>
//             </li>
//           </ul>
//         </div>
//       </div>
//     );
    
//   }
  
// }
