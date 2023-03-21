import { notificationActions } from "../../../store/notification/notification";
import { apiRequest } from "../../../helpers/connections";
import { noteSliceActions } from "../../../store/note/note";

export const getNotes = async (dispatch, auth) => {
  try {
    const res = await apiRequest("api/notes", undefined, undefined, auth);

    return res;
  } catch (error) {
    console.log(error);
  }
};

export const deleteNote = async (dispatch, id, auth) => {
  dispatch(notificationActions.setNotify(true));

  try {
    await apiRequest("api/notes/" + id, undefined, "delete", auth);
    dispatch(noteSliceActions.setDisplay(false));
    dispatch(notificationActions.setNotify(false));
  } catch (error) {
    if (error.info) {
      dispatch(notificationActions.setMessage(error.info));
    } else {
      dispatch(notificationActions.setMessage("Something went wrong"));
    }
  }
};

export const updateNote = async (dispatch, id, body, auth) => {
  dispatch(notificationActions.setNotify(true));
  try {
    await apiRequest("api/notes/" + id, body, "patch", auth);
    dispatch(noteSliceActions.setDisplay(false));
    dispatch(notificationActions.setNotify(false));
  } catch (error) {
    if (error.info) {
      dispatch(notificationActions.setMessage(error.info));
    } else {
      dispatch(notificationActions.setMessage("Something went wrong"));
    }
  }
};

export const addNote = async (dispatch, body, auth) => {
  dispatch(notificationActions.setNotify(true));

  try {
    await apiRequest("api/notes", body, "post", auth);
    dispatch(notificationActions.setNotify(false));

    dispatch(noteSliceActions.setDisplay(false));
  } catch (error) {
    if (error.info) {
      dispatch(notificationActions.setMessage(error.info));
    } else {
      dispatch(notificationActions.setMessage("Something went wrong"));
    }
  }
};
