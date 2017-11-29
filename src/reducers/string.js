import { string1 } from '../data'

//string1 goes as default state into state
//state is available at every child of Provider(store)
const Reducer1 = (state = string1, action) => {
  switch (action.type) {

    case 'ACTION1':
      return action.text

    default:
      return state
  }
}

export default Reducer1