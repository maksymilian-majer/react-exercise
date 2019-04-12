import userActions from "../../actions/users";

const initialState = {
  loading: false,
  error: null,
  list: []
};

const mapUsers = list => {
  return list.map(user => ({
    id: user.login.uuid,
    first: user.name.first,
    last: user.name.last,
    email: user.email,
    phone: user.phone
  }));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case userActions.types.findAll.request:
      return { ...state, loading: true, error: null };
    case userActions.types.findAll.failure:
      return {
        ...state,
        loading: false,
        error: "There was an error with the request"
      };
    case userActions.types.findAll.success:
      return {
        ...state,
        loading: false,
        list: mapUsers(action.payload.data.results),
        error: null
      };
    default:
      return state;
  }
};

export default { [userActions.storeRef]: reducer };
