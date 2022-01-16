export const cardReducer = (state = [], action) => {
    switch(action.type){
        case "FETCH_CARDS":
            return action.payload
        case "ADD_CARD":
            return [...state, action.payload]
        default:
            return state
    }
}