import profileActions from "../../actions/profile";

const initialState = {
  loggedIn: false,
  initials: undefined
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case profileActions.types.logIn:
      return { ...state, loggedIn: true, initials: action.payload.initials };
    case profileActions.types.logOut:
      return { ...state, loggedIn: false };
    default:
      return state;
  }
};

export default { [profileActions.storeRef]: reducer };
