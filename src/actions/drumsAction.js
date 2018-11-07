export function drumClicked(clicked) {
  console.log("drumsAction: action is ", clicked);
  return {
    type: "DRUM_CLICKED",
    payload: clicked
  };
}
