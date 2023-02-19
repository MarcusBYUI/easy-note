import { notificationActions } from "../../../store/notification/notification";
import { apiRequest } from "../../../helpers/connections";

export const getNotes = async (dispatch) => {
  try {
    const res = await apiRequest("api/notes");

    return res;
  } catch (error) {
    dispatch(notificationActions.setMessage("COuld note fetch notes"));
  }
};
