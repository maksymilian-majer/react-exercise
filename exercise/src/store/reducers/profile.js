import profileActions from "../../actions/profile";

const initialState = {
  loggedIn: false,
  initials: undefined
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case profileActions.types.LOG_IN:
      return { ...state, loggedIn: true, initials: action.payload.initials };
    case profileActions.types.LOG_OUT:
      return { ...state, loggedIn: false };
    default:
      return state;
  }
};

export default { [profileActions.storeRef]: reducer };
