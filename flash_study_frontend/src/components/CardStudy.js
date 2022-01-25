import React from "react";
import { connect } from "react-redux";

const CardStudy = ({cards}) => {

    const handleClick = (e) => {
        let card = e.target.children.answer
        card.style.visibility = "visible"
    }

    return(
        <div>
            <h2>Click a card below to see the answer:</h2>
                <ul onClick={handleClick}>
                    {cards.map((card) => ({ card, sort: Math.random() })) //assign each card a random sort key
                    .sort((a, b) => a.sort - b.sort) //sort using random key
                    .map(({ card }) => //unmap to get original objects
                        <li id={card.id} key={card.id} className='card'>
                            <div id='question'>{card.question}</div><br/>
                            <div id='answer'>{card.answer}</div>
                        </li>
                    )}
                </ul>
        </div>
    )
}

const mapStateToProps = state => {
    return {cards: state.cards}
}

export default connect(mapStateToProps)(CardStudy);