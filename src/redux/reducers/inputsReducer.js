const initialInputs = {
  path: '',
  newValue: ''
}

const inputsReducer = (inputs=initialInputs, action) => {
  switch (action.type) {
    case 'SET_PATH': 
      return {...inputs, path: action.payload}
    case 'SET_NEW_VALUE': 
      return {...inputs, newValue: action.payload}
    default:
      return inputs;
  }
}

export default inputsReducer;