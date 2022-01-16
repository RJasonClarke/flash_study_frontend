import React from "react";
import { connect } from "react-redux";

const CardStudy = ({cards}) => {
    return(
        <div>
            <h3>Click a card to see the answer</h3>
            {cards.map(card => 
                <ul key={card.id}>
                    <li key={card.id}>
                        Q: {card.question} <br/>
                        A: {card.answer}
                    </li>
                </ul>
        )}
        </div>
    )
}

const mapStateToProps = state => {
    return {cards: state.cards}
}

export default connect(mapStateToProps)(CardStudy);