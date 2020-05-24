import React from 'react';
import { deleteSmurf } from '../../../actions/action.js';
import { connect } from 'react-redux';
import './smurfcard.css';

const SmurfCard = ({smurf, deleteSmurf}) => {
    return (
        <div className='smurf-card'>
            <h1>{smurf.name}</h1>
            <ul>
                <li>{smurf.age}</li>
                <li>{smurf.height}</li>
            </ul>
            <button onClick={() => deleteSmurf(smurf.id)}>Delete</button>
        </div>
    )
}

export default connect(null, { deleteSmurf })(SmurfCard);