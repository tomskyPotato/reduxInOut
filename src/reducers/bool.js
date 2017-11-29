const string3 = false

const Reducer2 = (state = string3, action) => {
    switch (action.type) {
      case 'SET_VISIBILITY_FILTER':
        return action.filter
      default:
        return state
    }
}

export default Reducer2