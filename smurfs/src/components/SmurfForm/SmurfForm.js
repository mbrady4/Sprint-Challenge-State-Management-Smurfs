import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../../actions/action.js';

const SmurfForm = (props) => {
    const [formValues, setFormValues] = useState({
        name: '',
        age: '',
        height: ''
    })

    const onValueChange = event => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value
        });
    }

    const onFormSubmit = event => {
        event.preventDefault();
        props.addSmurf(formValues.name, 
                 formValues.age, 
                 formValues.height);
    }

    return (
        <div>
            <h1>Add A Smurf</h1>
            <form onSubmit={onFormSubmit}>
                <input
                    value={formValues.name}
                    placeholder='Enter Smurf Name'
                    onChange={onValueChange}
                    name='name'
                />
                <input
                    value={formValues.age}
                    placeholder='Enter Smurf Age'
                    onChange={onValueChange}
                    name='age'
                />
                <input
                    value={formValues.height}
                    placeholder='Enter Smurf Height'
                    onChange={onValueChange}
                    name='height'
                />
                <input type='submit'/>
            </form>
        </div>
    )
}

export default connect(null, { addSmurf })(SmurfForm);