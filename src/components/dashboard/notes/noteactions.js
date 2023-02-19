import { notificationActions } from "../../../store/notification/notification";
import { apiRequest } from "../../../helpers/connections";
import { noteSliceActions } from "../../../store/note/note";

export const getNotes = async (dispatch) => {
  try {
    const res = await apiRequest("api/notes");

    return res;
  } catch (error) {
    dispatch(notificationActions.setMessage("Cuuld not fetch notes"));
  }
};

export const deleteNote = async (dispatch, id) => {
  try {
    await apiRequest("api/notes/" + id, undefined, "delete");
    dispatch(noteSliceActions.setDisplay(false));
    dispatch(notificationActions.setMessage("Note delete sucessfully"));
  } catch (error) {
    dispatch(notificationActions.setMessage("Could not delete note"));
  }
};

export const updateNote = async (dispatch, id, body) => {
  try {
    await apiRequest("api/notes/" + id, body, "patch");
    dispatch(noteSliceActions.setDisplay(false));
    dispatch(notificationActions.setMessage("Note updated sucessfully"));
  } catch (error) {
    dispatch(notificationActions.setMessage("Could not update note"));
  }
};

export const addNote = async (dispatch, body) => {
  try {
    await apiRequest("api/notes", body, "post");
    dispatch(noteSliceActions.setDisplay(false));
    dispatch(notificationActions.setMessage("Note added sucessfully"));
  } catch (error) {
    dispatch(notificationActions.setMessage("Could not add note"));
  }
};
