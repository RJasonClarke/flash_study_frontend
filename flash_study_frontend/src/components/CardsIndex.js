import React from "react";
import { connect } from "react-redux";

const CardsIndex = ({cards}) => {
    return(
        <div>
            <h2>Your Flash Cards:</h2>
            <ul className="cards-index">
            {cards.map(card => 
                    <li key={card.id} className='card'>
                        {card.question} <br/> <br/>
                        {card.answer}
                    </li>
                )}
            </ul>
        </div>
    )
}

const mapStateToProps = state => {
    return {cards: state.cards}
}

export default connect(mapStateToProps)(CardsIndex);