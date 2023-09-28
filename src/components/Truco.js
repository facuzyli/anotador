import React, { useState } from 'react';
import '../styles/Truco.css';

function Truco() {
  // Estados para manejar los puntos de cada equipo
  const [nosotros, setNosotros] = useState(0);
  const [ellos, setEllos] = useState(0);

  // Función para agregar puntos al equipo seleccionado
  const handleAddPoint = (team) => {
    if (team === 'nosotros' && nosotros < 30) {
      setNosotros(nosotros + 1);
    } else if (team === 'ellos' && ellos < 30) {
      setEllos(ellos + 1);
    }
  };

  // Función para restar puntos al equipo seleccionado
  const handleSubtractPoint = (team) => {
    if (team === 'nosotros' && nosotros > 0) {
      setNosotros(nosotros - 1);
    } else if (team === 'ellos' && ellos > 0) {
      setEllos(ellos - 1);
    }
  };

  // Función para convertir puntos en cajas visuales
  function convertPointsToBoxes(points) {
    const fullBoxes = Math.floor(points / 5);
    const remainingPoints = points % 5;
    let boxes = [];
    for (let i = 0; i < fullBoxes; i++) {
      boxes.push(
        <div className="box complete" key={i}>
          <div className="diagonal"></div>
        </div>
      );
    }
    if (remainingPoints > 0) {
      let partialBox = [];
      if (remainingPoints >= 1) partialBox.push(<div className="left-stick" key="left"></div>);
      if (remainingPoints >= 2) partialBox.push(<div className="top-stick" key="top"></div>);
      if (remainingPoints >= 3) partialBox.push(<div className="right-stick" key="right"></div>);
      if (remainingPoints >= 4) partialBox.push(<div className="bottom-stick" key="bottom"></div>);
      if (remainingPoints === 5) partialBox.push(<div className="diagonal" key="diagonal"></div>);
      boxes.push(<div className="box" key={fullBoxes}>{partialBox}</div>);
    }
    return boxes;
  }

  // Renderizado del componente
  return (
    <div id='trucoBoard'>
      <div className='team nosotros'>
        <h2>Nosotros</h2>
        <div className='points'>{convertPointsToBoxes(nosotros)}</div>
        {nosotros === 15 && <div className='divider15'></div>}
        {nosotros === 30 && <div className='winner'>¡Ganamos!</div>}
      </div>
      <div className='dividerT'></div>
      <div className='team ellos'>
        <h2>Ellos</h2>
        <div className='points'>{convertPointsToBoxes(ellos)}</div>
        {ellos === 15 && <div className='divider15'></div>}
        {ellos === 30 && <div className='winner'>¡Ganaron!</div>}
      </div>
      <button className='btn-nosotros-plus' onClick={() => handleAddPoint('nosotros')}>+</button>
      <button className='btn-nosotros-minus' onClick={() => handleSubtractPoint('nosotros')}>-</button>
      <button className='btn-ellos-plus' onClick={() => handleAddPoint('ellos')}>+</button>
      <button className='btn-ellos-minus' onClick={() => handleSubtractPoint('ellos')}>-</button>
    </div>
  );
}

export default Truco;