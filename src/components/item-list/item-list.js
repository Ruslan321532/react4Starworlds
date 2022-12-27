import React, { useEffect, useState } from 'react';
import SwapiService from '../../services/swapi-service';
import './item-list.css';


const ItemList = () => {
  const [state, setState] = useState({data: []})
  const swapi = new SwapiService()

  useEffect(() => {
    swapi.getAllPeople()
    .then(data => setState({data:data}))
  })

  const content = state.data.map(item => (
    <li className="list-group-item">{item.name}</li>
  ))

  return (
    <ul className="item-list list-group">
      {content}
         {/* <li className="list-group-item">
           Luke Skywalker
         </li>
         <li className="list-group-item">
           Darth Vader
         </li>
         <li className="list-group-item">
           R2-D2
         </li>
         <li className="list-group-item">
           C-3PRO
         </li>
         <li className="list-group-item">
           Leia Organa
         </li>
         <li className="list-group-item">
           Owen Lars
         </li>
         <li className="list-group-item">
           Beru Whitesun Lars
         </li>
         <li className="list-group-item">
           R5-D4
         </li>
         <li className="list-group-item">
           Biggs Darklighter
         </li>
         <li className="list-group-item">
           Obi-Wan Kenobi
         </li> */}
       </ul>
  )

}
export default ItemList

// export default class ItemList extends Component {

//   render() {
//     return (
//       <ul className="item-list list-group">
//         <li className="list-group-item">
//           Luke Skywalker
//         </li>
//         <li className="list-group-item">
//           Darth Vader
//         </li>
//         <li className="list-group-item">
//           R2-D2
//         </li>
//         <li className="list-group-item">
//           C-3PRO
//         </li>
//         <li className="list-group-item">
//           Leia Organa
//         </li>
//         <li className="list-group-item">
//           Owen Lars
//         </li>
//         <li className="list-group-item">
//           Beru Whitesun Lars
//         </li>
//         <li className="list-group-item">
//           R5-D4
//         </li>
//         <li className="list-group-item">
//           Biggs Darklighter
//         </li>
//         <li className="list-group-item">
//           Obi-Wan Kenobi
//         </li>
//       </ul>
//     );
//   }
// }
