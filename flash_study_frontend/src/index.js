import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { cardsReducer } from './reducers/cardsReducer';

import App from './App'

const store = createStore(cardsReducer,
  composeWithDevTools(applyMiddleware(thunk))
  )

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root')
);
