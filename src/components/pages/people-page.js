// // import React from 'react'
// // import ItemList from './../item-list/index';
// // import ItemDetails from './../item-details/index';
// // import Row from './../row/index';
// // // import ItemList from './../item-list/item-list';
// // // import { Consumer } from '../swapi-context';
// //  import { Context } from '../swapiContext/index';

// // function withSwapi (View) {
// // const Wrapper = (props) =>{
// //     return (
// //         <Context.Consumer>
// //             {
// //                 (swapi) => {
// //                     <View {...props} swapi={swapi}/>
// //                 }
// //             }
// //         </Context.Consumer>
// //     )}
// //     return Wrapper
// // }

// // // withSwapi()

// // const PeoplePage = () => {

// //     const leftElement = <ItemList/>
// //     const rightElement = <ItemDetails/>

// //     return (
// //         <Row left={leftElement} right={rightElement}/>
// //   )
// // }

// // export default PeoplePage
// import React, { useState } from 'react'
// import ItemList from '../item-list';
// import {ItemDetails, Record} from '../item-details';
// import Row from '../row';
// import withSwapi from '../hoc';



// const leftElementMethods = (swapi) => ({getData: swapi.getAllPlanets})
// const NewItemList = withSwapi(ItemList, leftElementMethods)

// const rightElementMethods = (swapi) => ({getData: swapi.getPlanetImage})
// const NewItemDetails = withSwapi(ItemDetails, rightElementMethods)
    
// const PeoplePage = () => {
//     const [state, setState] = useState({itemId: 1})



//     const leftElement = ( 
//     <NewItemList setItemId={(id) => setState({itemId: id})}>
//       {(item) => `${item.name} - ${item.eyeColor}`}

//       </NewItemList>
//       )
      
//     const rightElement = (
//       <NewItemDetails itemId={state.itemId}>
//        <Record label='Gender' label_key='gender'/>
//           <Record label='Eye bcolor' label_key='eyeColor'/>
//           <Record label='birth year' label_key='birthYear'/>
//         </NewItemDetails>
//     ) 
    
//   return (
//         <Row left={leftElement} right={rightElement}/>
//   )
  
// } 

// export default PeoplePage
import React, { useState } from 'react'
import ItemList from '../item-list';
import ItemDetails from '../../components/item-details/item-details';
import Row from '../row/row';
// import {Consumer} from '../swapi-context'
// import { Component } from 'react/cjs/react.production.min';
import withSwapi from '../hoc';


// function withSwapi (View) {
//     const Wrapper = (props) => {
//     return (
//         <Consumer>
//             {
//                 (swapi) => {
//                     <View {...props} swapi={swapi}/>
//                 }
//             }
//         </Consumer>
//     )

//     }
//     return Wrapper

// }



const PeoplePage = () => {
  const [state, setState] = useState({ itemId: 1 })

  const NewItemList = withSwapi(ItemList)
  const NewItemDetails = withSwapi(ItemDetails)

  // const leftElement= (
  //     <Consumer>
  //         {
  //             (swapi) => {
  //                 return <ItemList swapi={swapi} setItemId={(id) => setState({itemId: id})}/>
  //             }
  //         }
  //     </Consumer>
  // )

  // const rightElement = (
  //     <Consumer>
  //         {
  //             (swapi) => {
  //                 return <ItemDetails swapi={swapi}  itemId={state.itemId}/>
  //             }
  //         }
  //     </Consumer>
  // )

  const leftElement = <NewItemList setItemId={(id) => setState({ itemId: id })} />
  const rightElement = <NewItemDetails itemId={state.itemId} />

  return (
    <Row left={leftElement} right={rightElement} />
  )
}

export default PeoplePage;