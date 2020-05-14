import React from "react";
import { connect } from 'react-redux';

import { getData, addData, nameChange, heightChange, ageChange } from './actions/actions'
import "./App.css";

const App = ({ smurfs, smurf, getData, addData, nameChange, heightChange, ageChange }) => {

  const add = (e) => {
    e.preventDefault();
    addData(smurf);
    getData();
  }

  return (
    <div className="App">
      <h2>Smurf village</h2>
      <button onClick={getData}>Show the smurf</button>
      <button onClick={add}>Add</button>
      <form>
        <input
          name='name'
          type='text'
          placeholder='Name'
          onChange={nameChange} />
        <input
          name='height'
          type='text'
          placeholder='Height'
          onChange={heightChange} />
        <input
          name='age'
          type='text'
          placeholder='Age'
          onChange={ageChange} />
      </form>
      {smurfs.map((smurf, index) =>
        <div key={index}>
          <h3>Name: {smurf.name}</h3>
          <p>Height: {smurf.height}</p>
          <p>Age: {smurf.age}</p>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    smurfs: state.reducer.smurfs,
    smurf: state.reducer.smurf
  }
}


export default connect(mapStateToProps, {
  getData,
  addData,
  nameChange,
  heightChange,
  ageChange
})(App);
