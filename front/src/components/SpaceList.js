import React from 'react';

const SpaceList = ({spacecrafts}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Tipo</th>
          <th>Actividad</th>
          <th>Origen</th>
          <th>Tripulacion</th>
          <th>Combustible</th>
          <th>Estado</th>
          <th>Peso</th>
        </tr>
      </thead>
      <tbody>
        {spacecrafts.map((spacecrafts) => (
          <tr key={spacecrafts._id}>
            <th>{spacecrafts._id}</th>
            <th>{spacecrafts.name}</th>
            <th>{spacecrafts.type}</th>
            <th>{spacecrafts.activity}</th>
            <th>{spacecrafts.origin}</th>
            <th>{spacecrafts.tripulation}</th>
            <th>{spacecrafts.combustible}</th>
            <th>{spacecrafts.state}</th>
            <th>{spacecrafts.weight}</th>
        </tr>
        ))}
      </tbody>
    </table>
   );
}

export default SpaceList;
