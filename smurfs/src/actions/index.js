import axios from 'axios';
export const GET_SMURF = 'GET_SMURF';
export const GET_SUCCESS = 'GET_SUCCESS';
export const GET_FAIL = 'GET_FAIL';
export const ADD_SMURF = 'ADD_SMURF';
export const ADD_SUCCESS = 'ADD_SUCCESS';
export const ADD_FAIL = 'ADD_FAIL';

export const getSmurf = () => (dispatch) => {
  dispatch({ type: GET_SMURF, payload: 'Building the village' });
  axios
    .get('http://localhost:3333/smurfs')
    .then((res) => {
      //   console.log("RES", res.data);
      dispatch({ type: GET_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({
        type: GET_FAIL,
        payload: err,
      });
    });
};

export const addSmurf = (smurf) => (dispatch) => {
  dispatch({ type: ADD_SMURF, payload: 'Adding to the village' });
  console.log('addS', smurf);
  axios
    .post('http://localhost:3333/smurfs', smurf)
    .then((res) => {
      console.log('RES', res.data);
      dispatch({ type: ADD_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: ADD_FAIL,
        payload: err,
      });
    });
};

/*
 * a good use case - you make an api request  that has response
 *  An action is used to store something in redux (redux store)
 * very common for actions to make api requests
 * with the response from those requests you store them redux by:
 *   - dispathing a type and a payload
 *     - type: is what tells your reducer whjat to do with the data
 *     - paylaod: is the data you want to save
 *
 */
