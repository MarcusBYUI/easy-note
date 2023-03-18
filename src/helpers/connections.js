import axios from "axios";
const BASEURL = "http://100.25.196.27:8000/";
//const BASEURL = "http://localhost:8000/";
export async function apiRequest(path, body = {}, method = "get", auth) {
  return new Promise(async (resolve, reject) => {
    let header = {};
    if (auth && auth.state)
      header = {
        Authorization: `Token ${auth.token}`,
      };
    try {
      const response = await axios({
        method: method,
        url: BASEURL + path,
        headers: header,
        data: body,
      });
      resolve(response.data);
    } catch (err) {
      const error = new Error(err);
      error.info = err.response.data[Object.keys(err.response.data)[0]][0];
      reject(error);
    }
  });
}
