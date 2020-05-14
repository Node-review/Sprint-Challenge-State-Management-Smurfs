import axios from 'axios';

export const getData = () => {
  return async dispatch => {
    try {
      const res = await axios.get('http://localhost:3333/smurfs')
      console.log(res.data)
      dispatch({ type: 'GET_SMURFS', payload: res.data })
    }
    catch (err) {
      console.log(err)
    }
  }
}