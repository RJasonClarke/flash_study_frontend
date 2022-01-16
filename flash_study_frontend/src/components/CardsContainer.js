import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchCards } from '../actions/cardsActions';
import CardsForm from './CardsForm';
import CardsIndex from './CardsIndex';

class CardsContainer extends Component {

    componentDidMount(){
        this.props.fetchCards()
    }

    render() {
        return (
            <div>
                <CardsIndex></CardsIndex>
            </div>
        );
    }
}

export default connect(null, { fetchCards })(CardsContainer);