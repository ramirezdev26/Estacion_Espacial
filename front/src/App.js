import React, { Fragment, useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import SpaceList from "./components/SpaceList";

function App() {

  const [spacecrafts, setSpacecrafts] = useState([])

  useEffect(() => {
    const getSpacecrafts = () => {
      fetch('http://localhost:8080/api/v1/spacecraft')
        .then(res => res.json())
        .then(res => setSpacecrafts(res))
    }
    getSpacecrafts()
  }, [])

  return (
    <Fragment>
      <Navbar brand="Estacion Espacial" />
      <div className="container">
        <div className="row">
          <div className="col-7">
            <h2 style={{textAlign: 'center'}}>Spacecraft List</h2>
            <SpaceList spacecrafts={spacecrafts}/>
          </div>
          <div className="col-5">
            <h2 style={{textAlign: 'center'}}>Spacecraft Form</h2>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
