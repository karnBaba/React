import {userConstants} from './constants';
import {userService} from '../api/WebApiClient';
import {history} from '../utils/history';


export const userActions = {
	login,
	logout
};

function login(username, password) {
	return dispatch => {
		dispatch(request({ username }));
		userService.login(username, password)
		.then(
			user => { 
				dispatch(success(user));
				history.push('/dashboard');
			},
			error => {
				dispatch(failure(error));
			}
		);
	};

	function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
	function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
	function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
	userService.logout();
	history.push('/');
	return { type: userConstants.LOGOUT };
	
}
