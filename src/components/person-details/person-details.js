import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import './person-details.css';

export default class RandomCharacter extends Component {
swapi = new SwapiService()

state = {
  data: {}
}

_updateCharacter = (id) => {
  this.swapi.getPerson(id)
  .then(data => {
    console.log('');
    this.setState({data: data})
    // console.log('data');
  })
}

componentDidMount = () => {

  setInterval(() => {
    const id = Math.floor(Math.random() * (20 - 1 + 1) + 1)
    this._updateCharacter(id)
  }, 2000)
 

}


  render() {

    const {id, name, birthYear, gender, mass, skin_color, hair_color, homeworld, height} = this.state.data ;
    const characterImg = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
    return (
      <div className="random-planet jumbotron rounded">
        <img className="planet-image"
             src={characterImg} log/>
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
              <span className='term'>homeworld  </span>
              <span>{homeworld}</span>
            </li>
          </ul>
        </div>
      </div>
    );
    
  }
  
}
