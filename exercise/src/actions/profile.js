const storeRef = "profile";
const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";

const actions = {};

const logIn = initials => ({
  type: LOG_IN,
  payload: { initials }
});

const logOut = () => ({
  type: LOG_OUT
});

const actions = {
  logIn,
  logOut
};

const types = {
  LOG_IN,
  LOG_OUT
};

export default {
  storeRef,
  actions,
  types
};
