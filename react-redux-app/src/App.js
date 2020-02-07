import React from 'react';
import './App.css';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import AgeForm from './components/ageForm';
import CardList from './components/cardList';

import { ageReducer as reducer } from './reducers/ageReducer';

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1 className='title'>MTG Cards</h1>
        <AgeForm />
        <CardList />
      </div>
    </Provider>
  );
}

export default App;
