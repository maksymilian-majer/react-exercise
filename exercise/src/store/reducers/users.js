import userActions from "../../actions/users";

const initialState = {
  loading: false,
  error: null,
  users: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case userActions.findAll.request:
      return { ...state, loading: true, error: null };
    case userActions.findAll.failure:
      return { ...state, loading: false, error: 'There was an error with the request' };
    case userActions.findAll.success:
      return { ...state, loading: false, users: action.payload.data, error: null };
    default:
      return state;
  }
};

export default { [userActions.storeRef]: reducer };
