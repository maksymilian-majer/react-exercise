import axios from "../axios";
import { makeActionTypes } from "./utils";

const storeRef = "users";
const allowed = ["findAll"];

const types = makeActionTypes(storeRef, allowed);

const doFindAll = () => {
  return axios
    .get("/?results=20")
    .then(response => ({ response }))
    .catch(error => ({ error }));
};

const findAll = () => async (dispatch, ...rest) => {
  dispatch({ type: types.findAll.request, ...rest });
  const { response, error } = await doFindAll();

  if (response) {
    dispatch({ type: types.findAll.success, payload: response, ...rest });
  } else {
    dispatch({ type: types.findAll.failure, error, ...rest });
  }
};

export default {
  storeRef,
  types,
  findAll
};
