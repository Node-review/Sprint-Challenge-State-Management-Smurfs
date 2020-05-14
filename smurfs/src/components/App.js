import React, { useEffect } from "react";
import { connect } from 'react-redux';

import { getData } from './actions/actions'
import "./App.css";

const App = ({ smurfs, getData }) => {

  useEffect(() => {
    getData();
  }, [getData])

  return (
    <div className="App">
      {smurfs.map(smurf =>
        <div key={smurf.id}>
          <h3>{smurf.name}</h3>
          <p>{smurf.height}</p>
          <p>{smurf.age}</p>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    smurfs: state.reducer.smurfs
  }
}


export default connect(mapStateToProps, {
  getData
})(App);
