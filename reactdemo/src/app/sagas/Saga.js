/*import {fork, call, put} from 'redux-saga/effects';
import {takeEvery} from 'redux-saga'
import {fetchUser} from "../Api/WebApiClient"
import {submitFormInitiated, submitFormError, submitFormSuccess } from '../actions/actions'
import {SUBMIT_FORM_SUCCESS} from '../actions/constants'


function* submitToServer(data) {
    try {
   let result = yield call (fetchUser, data);
  console.log("result after fetch", result);
  yield put({type: SUBMIT_FORM_SUCCESS, payload: result})

    
   } catch(error) {
    debugger;
   yield put({type: 'SUBMIT_FORM_ERROR', payload: err})
  }
}



function* callSubmit(action) {
  yield call(submitToServer, action.payload);
}

function* submitSaga() {
    debugger;
  yield takeEvery('SUBMIT_FORM_INITIATED', callSubmit);
}


export default function* root() {
    yield fork(submitSaga);
  }*/