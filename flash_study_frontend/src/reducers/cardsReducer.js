export const cardsReducer = (state=[], action) => {
    switch(action.type){
        case "GET_CARDS":
            return action.payload
        default:
            return state
    }
}