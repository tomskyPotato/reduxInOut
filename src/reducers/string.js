const string1 = "Text Reducer1"
const string2 = "Text Reducer2"

const Reducer1 = (state = string1, action) => {
  switch (action.type) {

    case 'ACTION1':
      return action.text

    default:
      return state
  }
}

export default Reducer1