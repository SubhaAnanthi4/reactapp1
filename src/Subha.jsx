//import Forms from '../components/Forms.jsx'
import {createContext, useState} from 'react';
import './App.css'
//import Hen from '../components/Hen.jsx'
//import Useref from '../components/Useref.jsx';
//import Form from '../components/Form.jsx'
import Slambook from '../components/Slambook.jsx'
export let hen=createContext();
function Subha() {
  
  let [click,setclick]=useState(0);
  return (

    <>
    {/* <ol className="master" type="1">
        <li>
          Fruits
          <ul className="fruit">
            <li>Apple</li>
            <li>Orange</li>
            <li>Banana</li>
          </ul>
        </li>
        <li>
          Vegetables
          <ol className="vegie" type="i">
            <li>Brinjal</li>
            <li>Carrot</li>
            <li>Potato</li>
          </ol>
        </li>
        <li>
          Birds
          <ul className="bird">
            <li>Peacock</li>
            <li>Crow</li>
            <li>Cuckoo</li>
          </ul>
        </li>
      </ol>
     */}
   {/* <Forms system={10} /> */}
    <Slambook />
     {/*<Usestate />
     <Useref />
     <Hen name="water"/>*/}
     {/*<hen.Provider value={{water:"water" ,click}}>
      <Hen />
      <button onClick={()=>setclick(!click)}>click</button>
     </hen.Provider>*/}
    </>
    
  )
}

export default Subha;
