import { notificationActions } from "../../store/notification/notification";
import { authSliceActions } from "../../store/auth/auth";

import { apiRequest } from "../../helpers/connections";
import { setLocalStorage } from "../../helpers/utils";

export const signup = async (dispatch, form, setScreen) => {
  dispatch(notificationActions.setNotify(true));
  try {
    await apiRequest("api/auth/register", form, "POST");
    setScreen("signin");
    dispatch(notificationActions.setNotify(false));
  } catch (error) {
    if (error.info) {
      dispatch(notificationActions.setMessage(error.info));
    } else {
      dispatch(notificationActions.setMessage("Something went wrong"));
    }
  }
};

export const login = async (dispatch, form, navigate) => {
  dispatch(notificationActions.setNotify(true));
  try {
    const data = await apiRequest("api/auth/login", form, "POST");
    const auth = {};
    auth.state = true;
    auth.token = data.token;
    dispatch(authSliceActions.setLoggedIn(auth));
    dispatch(authSliceActions.setUser(data.user));
    setLocalStorage("expiry", new Date().getTime() + 36000000);
    dispatch(notificationActions.setNotify(false));
    navigate("/user");
  } catch (error) {
    if (error.info) {
      dispatch(notificationActions.setMessage(error.info));
    } else {
      dispatch(notificationActions.setMessage("Something went wrong"));
    }
  }
};

export const updateUser = async (
  dispatch,
  body,
  auth,
  user,
  last_name,
  first_name
) => {
  dispatch(notificationActions.setNotify(true));
  try {
    console.log(user.id);
    await apiRequest("api/auth/update/" + user.id, body, "patch", auth);
    const newuser = {
      id: user.id,
      email: user.email,
      first_name,
      last_name,
    };
    dispatch(authSliceActions.setUser(newuser));
    dispatch(notificationActions.setNotify(false));
  } catch (error) {
    if (error.info) {
      dispatch(notificationActions.setMessage(error.info));
    } else {
      dispatch(notificationActions.setMessage("Something went wrong"));
    }
  }
};

export const logout = async (navigate, auth, dispatch) => {
  dispatch(notificationActions.setNotify(true));

  try {
    await apiRequest("api/auth/logout", undefined, "POST", auth);
    localStorage.clear("authState");
    navigate("/");
    dispatch(notificationActions.setNotify(false));
  } catch (error) {
    dispatch(notificationActions.setMessage("Something went wrong"));
  }
};
