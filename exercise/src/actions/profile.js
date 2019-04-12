const storeRef = "profile";
const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";

const logIn = initials => ({
  type: LOG_IN,
  payload: { initials }
});

const logOut = () => ({
  type: LOG_OUT
});

const types = {
  logIn: LOG_IN,
  logOut: LOG_OUT
};

export default {
  storeRef,
  types,
  logIn,
  logOut
};
