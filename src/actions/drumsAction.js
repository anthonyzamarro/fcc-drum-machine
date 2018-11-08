export function drumClicked(clicked) {
  console.log("drumsAction: action is ", clicked);
  return {
    type: "DRUM_CLICKED",
    payload: clicked
  };
}

export function drumPressed(pressed) {
  console.log("drumsAction: action is ", pressed);
  return {
    type: "DRUM_PRESSED",
    payload: pressed
  };
}
