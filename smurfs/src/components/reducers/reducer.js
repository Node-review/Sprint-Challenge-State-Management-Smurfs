const intialState = {
  smurfs: []
}

export const reducer = (state = intialState, action) => {
  switch (action.type) {

    case 'GET_SMURFS':
      return {
        ...state,
        smurfs: action.payload
      }

    default:
      return state
  }
}