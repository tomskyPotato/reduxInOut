import { combineReducers } from "redux";

const defaultState1 = "default Text exampleReducer1"

const defaultState2 = "default Text exampleReducer2"

const exampleReducer1 = (state = defaultState1, action) => {
    switch (action.type) {
      //Hier wird dem state eine variable namens "filter" hinzugefügt
      //mit einem string als inhalt.
      //Wenn sie schon im state vorhanden ist wird sie aktualisiert/überschrieben
      case 'ACTION_FILTER_1':
        return defaultState1
        
      case 'ACTION_FILTER_2':
        return defaultState2
        //"state" ist der aktuelle state wenn der zurückgegeben wird
        //bleibt alles wie es ist.
      default:
        return state
    }
  }

  const exampleReducer2 = (state = defaultState2, action) => {
      switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
          return action.filter
        default:
          return state
      }
    }

const mainReducer = combineReducers({
  exampleReducer1, 
  exampleReducer2
})

export default mainReducer