import React, { Fragment, useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import SpaceList from "./components/SpaceList";
import Form from "./components/Form";

function App() {

  const [newSpacecraft, setNewSpacecraft] = useState({
    name: ' ',
    activity: ' ',
    origin: ' ',
    tripulation: 0,
    combustible: ' ',
    state: ' ',
    weight: ' ',
    burden: ' ',
    thrust: ' ',
    height: ' ',
    power: ' ',
    objectOfStudy: ' ',
    inOrbit: ' ',
    speed: ' ',
    mission: ' '
  })

  const [spacecrafts, setSpacecrafts] = useState([])

  const [listUpdated, setListUpdated] = useState(false)

  useEffect(() => {
    const getSpacecrafts = () => {
      fetch('http://localhost:8080/api/v1/spacecraft')
        .then(res => res.json())
        .then(res => setSpacecrafts(res))
    }
    getSpacecrafts()
    setListUpdated(false)
  }, [listUpdated])

  return (
    <Fragment>
      <Navbar brand="Estacion Espacial" />
      <div className="container ms-0">
        <div className="row" style={{float: 'center'}}>
          <div className="col">
            <h2 style={{textAlign: 'center'}}>Spacecraft List</h2>
            <SpaceList spacecrafts={spacecrafts} listUpdated={listUpdated} setListUpdated={setListUpdated} newSpacecraft={newSpacecraft} setNewSpacecraft={setNewSpacecraft}/>
          </div>
        <div/>
        <div className="row"></div>
          <div className="col">
            <h2 style={{textAlign: 'center'}}>Spacecraft Form</h2>
            <Form newSpacecraft={newSpacecraft} setNewSpacecraft={setNewSpacecraft} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
