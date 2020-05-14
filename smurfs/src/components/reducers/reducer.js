const initialState = {
  smurfs: [],
  smurf: {
    name: '', height: '', age: ''
  }
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {

    case 'GET_SMURFS':
      return {
        ...state,
        smurfs: action.payload
      }

    case 'ADD_SMURF':
      return {
        ...state,
        smurfs: [...state.smurfs, action.payload],
        smurf: { name: '', height: '', age: '' }
      }

    case 'NAME_CHANGE':
      return {
        ...state,
        smurf: {
          ...state.smurf,
          name: action.payload
        }
      }
    case 'HEIGHT_CHANGE':
      return {
        ...state,
        smurf: {
          ...state.smurf,
          height: action.payload
        }
      }
    case 'AGE_CHANGE':
      return {
        ...state,
        smurf: {
          ...state.smurf,
          age: action.payload
        }
      }

    default:
      return state
  }
}