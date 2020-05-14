import axios from 'axios';

export const getData = () => {
  return async dispatch => {
    try {
      const res = await axios.get('http://localhost:3333/smurfs')
      dispatch({ type: 'GET_SMURFS', payload: res.data })
    }
    catch (err) {
      console.log(err)
    }
  }
}

export const addData = (newSmurf) => {
  return dispatch => {
    axios.post('http://localhost:3333/smurfs', newSmurf)
      .then(res => {
        console.log(res.data)
        dispatch({ type: 'ADD_SMURF', payload: res.data })
      })
      .catch(err => console.log(err))
  }
}

export const nameChange = e => {
  return ({ type: 'NAME_CHANGE', payload: e.target.value })
}

export const heightChange = e => {
  return ({ type: 'HEIGHT_CHANGE', payload: e.target.value })
}

export const ageChange = e => {
  return ({ type: 'AGE_CHANGE', payload: e.target.value })
}

