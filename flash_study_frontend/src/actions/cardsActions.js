export const fetchCards = () => {
    return dispatch => {
        fetch('http://localhost:3001/cards')
        .then(resp => resp.json())
        .then(cards => dispatch({type: 'FETCH_CARDS', payload: cards}))
    }
}

export const addCard = (card) => {
    return (dispatch) => {
        fetch('http://localhost:3001/cards',{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(card)
        })
        .then(resp => resp.json())
        .then(card => dispatch({type: 'ADD_CARD', payload: card}))
    }
}