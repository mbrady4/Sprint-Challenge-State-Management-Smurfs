import axios from 'axios'; 

export const FETCHING_SMURFS = "FETCHING_SMURFS";
export const SMURF_FETCH_SUCCESS = "SMURF_FETCH_SUCCESS";
export const SMURF_FETCH_FAILURE = "SMURT_FETCH_FAILURE";
export const ADDING_SMURF = "ADDING_SMURF";
export const SMURF_ADD_SUCCESS = "SMURF_ADD_SUCCESS";
export const SMURF_ADD_FAILURE = "SMURF_ADD_FAILURE";

export const fetchSmurfs = () => {
    const promise = axios.get(`http://localhost:3333/smurfs`);
    return dispatch => {
        dispatch({ type: FETCHING_SMURFS });
        promise
            .then(response => {
                console.log({response})
                dispatch({type: SMURF_FETCH_SUCCESS, payload: response.data})
            })
            .catch(error => {
                console.log(error);
                dispatch({type: SMURF_FETCH_FAILURE, payload: error})
            });
    };
};

export const addSmurf = (name, age, height) => {
    console.log('Add Smurf Triggered:', age, name, height)
    const postData = {
        'name': name,
        'age': age,
        'height': height
    }
    const postPromise = axios.post(`http://localhost:3333/smurfs`, postData)
    return dispatch => {
        dispatch({ type: ADDING_SMURF});
        postPromise
            .then(response => {
                console.log({response})
                dispatch({type: SMURF_ADD_SUCCESS, payload: response})
            })
            .catch(error => {
                console.log(error);
                dispatch({type: SMURF_ADD_FAILURE, payload: error});
            });
    };
};

export const DELETING_SMURF = "DELETING_SMURF";
export const DELETE_SMURF_SUCCESS = "DELETE_SMURF_SUCCESS";
export const DELETE_SMURF_FAILURE = "DELETE_SMURF_FAILURE";

export const deleteSmurf = (id) => {
    console.log("Delete Smurf triggered", id);
    const deletePromise = axios.delete(`http://localhost:3333/smurfs/` + id)
    console.log(deletePromise);
    return dispatch => {
        dispatch({ type: DELETING_SMURF});
        deletePromise
            .then(response => {
                dispatch({type: DELETE_SMURF_SUCCESS, payload: response})
            })
            .catch(error => {
                console.log(error);
                dispatch({type: DELETE_SMURF_FAILURE, payload: error})
            });
    };
};