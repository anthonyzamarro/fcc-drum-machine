export default function(state = null, action) {
  switch (action.type) {
    case "DRUM_CLICKED":
      // console.log("drumsReducer, DRUM_CLICKED: drum was clicked", action);
      const clickedDrum = Object.assign({ c: 4, d: 5 }, action.payload);
      return clickedDrum;
    case "DRUM_PRESSED":
      // console.log("drumsReducer, DRUM_PRESSED: drum was pressed", action);
      const pressedDrum = Object.assign({ c: 4, d: 5 }, action.payload);
      return pressedDrum;
    default:
      return state;
  }
}
