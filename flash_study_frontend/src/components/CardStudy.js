import React from "react";
import { connect } from "react-redux";

const CardStudy = ({cards}) => {

    return(
        <div>
            <h2>Click a card below to see the answer:</h2>
                {cards.map((card) => ({ card, sort: Math.random() }))
                .sort((a, b) => a.sort - b.sort)
                .map(({ card }) => 
                <ul key={card.id} className='card'>
                    <li key={card.id}>
                        <div className='question'>{card.question}</div>
                        <br/>
                        <div className='answer' >{card.answer}</div>
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