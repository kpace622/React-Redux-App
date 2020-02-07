import React from 'react';
import { connect } from 'react-redux';

import { getData } from '../actions';

const AgeForm = props => {
    
    const handleGetData = e => {
        e.preventDefault();
        props.getData();
    }

    return (
        <>
            {props.isFetchingData ? (
                <div className='laoding'>Loading cards for you!</div>
            ) : (
                <button className='show-button' onClick={handleGetData}>Show cards</button>
            )}
        </>
    );
};

const mapStateToProps = state => {
    return {
        isFetchingData: state.isFetchingData
    };
};

export default connect(
    mapStateToProps,
    { getData }
)(AgeForm);
