// first time redux runs, it runs all of the reducers
export default (state = null, action) => {
  // payload is the id of the library selected
  // console.log(action);
  switch (action.type) {
    case 'select_library':
      //return the libraries id
      return action.payload;
    default:
      return state;
  }
};
