import { combineReducers } from "redux";

import Reducer1 from './string'
import Reducer2 from './bool'
import Reducer3 from './array'
import Reducer4 from './object'

const mainReducer = combineReducers({
  Reducer1,
  Reducer2,
  Reducer3,
  Reducer4
})

export default mainReducer