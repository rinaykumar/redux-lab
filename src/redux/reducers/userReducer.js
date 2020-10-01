const initState = () => ({
  userName: 'abc',
  isLoggedIn: false,
});

// Keep track of current app state
// Modify the state given a request (action) [an object]
const userReducer = (state = initState(), action) => {
  // All actions have a type
  console.log(action);
  switch(action.type) {
    case 'USER_NAME_SET':
      return {
        ...state, // Copy old state
        userName: action.userName, // Input new user name
      };
    case 'USER_SET_LOGGED_IN':
      return {
        ...state,
        isLoggedIn: action.isLoggedIn,
      };
    default:
      // Don't modify state, ignore action
      return state;
  }
};

export default userReducer;
