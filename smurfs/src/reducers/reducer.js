import { FETCHING_SMURFS, 
         SMURF_FETCH_SUCCESS, 
         SMURF_FETCH_FAILURE,
         ADDING_SMURF,
         SMURF_ADD_SUCCESS,
         SMURF_ADD_FAILURE,
         DELETING_SMURF,
         DELETE_SMURF_SUCCESS,
         DELETE_SMURF_FAILURE } from "../actions/action";

const initialState = {
    smurfs: [{
        name: 'Mikey',
        age: 200,
        height: '5cm',
        id: 0
      }],
    fetchingSmurfs: false,
    error: '',
    addingSmurf: false,
    addSmurfError: '',
    deletingSmurf: false,
    deleteSmurfError: ''
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_SMURFS:
            return Object.assign({}, state, {fetchingSmurfs: true});
        case SMURF_FETCH_SUCCESS:
            return Object.assign({}, state, {
                smurfs: [...action.payload],
                fetchingSmurfs: false
            });
        case SMURF_FETCH_FAILURE:
            return Object.assign({}, state, {
                fetchingSmurfs: false,
                error: action.payload
            });
        case ADDING_SMURF:
            return Object.assign({}, state, {addingSmurf: true});
        case SMURF_ADD_SUCCESS:
            console.log("ADD SUCCESS SMURF TRIGGER");
            console.log(action.payload);
            return Object.assign({}, state, {
                addingSmurf: false,
                smurfs: action.payload.data
            });
        case SMURF_ADD_FAILURE: 
            return Object.assign({}, state, {
                addingSmurf: false,
                addSmurfError: action.payload
            }); 
        case DELETING_SMURF:
            return Object.assign({}, state, {deletingSmurf: true});
        case DELETE_SMURF_SUCCESS:
            return Object.assign({}, state, {
                deletingSmurf: false,
                smurfs: action.payload.data
            })
        case DELETE_SMURF_FAILURE:
            return Object.assign({}, state, {
                deletingSmurf: false,
                deleteSmurfError: action.payload
            })
        default:
            return state;
    }
};