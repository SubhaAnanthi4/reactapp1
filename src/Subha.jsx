import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Useparams from '../components/Useparams.jsx';
// import Forms from '../components/Forms.jsx'
// import { createContext, useState } from 'react';
// import './App.css'
// import Hen from '../components/Hen.jsx'
// import Useref from '../components/Useref.jsx';
// import Slambook from '../components/Slambook.jsx';

// export let hen = createContext();

function Subha() {
  // let [click, setclick] = useState(0);

  return (
    <Router>
      <nav>
        <Link to="/Useparams">Useparams</Link>
      </nav>
      <Routes>
        <Route path="/Useparams/:id" element={<Useparams />} />
      </Routes>

      {/* The following are commented-out features and components */}
      {/* 
        <ol className="master" type="1">
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

        <Forms system={10} />
        <Slambook />
        <Useref />
        <Hen name="water" />
        <hen.Provider value={{ water: "water", click }}>
          <Hen />
          <button onClick={() => setclick(!click)}>click</button>
        </hen.Provider>
      */}
    </Router>
  );
}

export default Subha;
