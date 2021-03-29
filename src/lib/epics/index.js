import { Observable } from 'rxjs';
import { showLoginIndicator } from '../actions';
import { AUTH_ACTION } from '../actions/types';

export const loginEpic = (action$, store) => action$.ofType(AUTH_ACTION.INIT_LOGIN)
    .mergeMap((a) => {
        return Observable.from(
                dummyApi()
                .then(() => store.dispatch({type: AUTH_ACTION.LOGIN_SUCCESS, user:{email: a.credentials.email}}))
        ).startWith(showLoginIndicator())
    });


export const logoutEpic = (action$, store) => action$.ofType(AUTH_ACTION.INIT_LOGOUT)
    .mergeMap(() => {
        return Observable.from(
            dummyApi()
            .then(() => store.dispatch({type: AUTH_ACTION.LOGOUT_SUCCESS}))
        ).startWith(showLoginIndicator())
});

const dummyApi = () => {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
}