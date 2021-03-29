import { AUTH_ACTION } from "./types";

export const initLogin = (credentials) => ({ type: AUTH_ACTION.INIT_LOGIN, credentials });
export const showLoginIndicator = () => ({type: AUTH_ACTION.SHOW_INDICATOR});
export const initLogout = () => ({ type: AUTH_ACTION.INIT_LOGOUT });
