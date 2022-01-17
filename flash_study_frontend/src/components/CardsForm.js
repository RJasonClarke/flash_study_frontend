import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCard } from '../actions/cardsActions';

class CardsForm extends Component {

    state = {
        question: "",
        answer: ""
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addCard(this.state)
    }
 
    render() {
        return (
            <div>
                <h2>Create A New Card: </h2>
               <form onSubmit={this.handleSubmit}>
                    <label>Question: </label>
                    <input type="text" value={this.state.name} onChange={this.handleChange} name="question"></input>
                    <br/>  
                    <label>Answer: </label>
                    <input type="text" value={this.state.name} onChange={this.handleChange} name="answer"></input>
                    <br/>
                    <input type="submit" value="Save Card"></input>
                </form> 
            </div>
        );
    }
}

export default connect(null, {addCard})(CardsForm);