const defaultObject = [
    {
        id: 0,
        name: "thomas",
        age: 37,
        active: false

    },
    {
        id: 1,
        name: "mas",
        age: 3,
        active: false
    }
]

const Reducer4 = (state = defaultObject, action) => {
    switch(action.type){
        case "ACTION2":
            return state.map(user =>
                (user.id === action.id)
                    ? {...user, active: !user.active}
                    : {...user, active: false}
            )
        default:   
            return state    
    }
}

export default Reducer4