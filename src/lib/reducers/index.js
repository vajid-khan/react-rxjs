import {AUTH_ACTION} from '../actions/types';

const defaultState = {
    auth:false,
    showIndicator:false,
    user:{},
}

export const authReducer = (state = defaultState, action) => {

    switch (action.type) {
      	case AUTH_ACTION.SHOW_INDICATOR:
        	return {
				...state,
				showIndicator: true,
        	}

      	case AUTH_ACTION.INIT_LOGIN:
        	return { 
				...state,
				auth: false
			};
  
      	case AUTH_ACTION.LOGIN_SUCCESS:
        	return { 
				auth: true,
				showIndicator: false,
				user: action.user
         	};
  
      	case AUTH_ACTION.LOGOUT_SUCCESS:
			return { 
				auth: false,
				showIndicator: false,
				user:{}
			};
  
		default:
        	return state;
    }
  };