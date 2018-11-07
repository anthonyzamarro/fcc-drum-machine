export default function(state = null, action) {
  switch (action.type) {
    case "DRUM_CLICKED":
      console.log("drumsReducer: drum was clicked", action);
      return action.payload;
      break;
      default:
      console.log('nah son');
  }
  return state;
}
