import React from 'react';
import { connect } from 'react-redux';

import { getData } from '../actions';

const CardList = props => {
    
    return (
        <>
            {props.error ? (
                <div>{props.error}</div>
            ) : (
                props.cards.map(card => <div className='wrapper'>
                    <h2 className='cards'>{card.name}</h2>
                    <h4 className='description'>{card.text}</h4>
                </div>)
            )}
        </>
    );
};

const mapStateToProps = state => {
    return {
        cards: state.cards
    };
};

export default connect(
    mapStateToProps,
    { getData }
)(CardList);
