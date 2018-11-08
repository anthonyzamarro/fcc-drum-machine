export default function(state = null, action) {
  switch (action.type) {
    case "DRUM_CLICKED":
      console.log("drumsReducer: drum was clicked", action);
      return action.payload;
    case 'DRUM_PRESSED':
      console.log("drumsReducer: drum was clicked", action);
      return action.payload;
      default:
      console.log('nah son');
  }
  return state;
}
