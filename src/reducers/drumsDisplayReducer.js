// “Sound effects obtained from https://www.zapsplat.com“
// https://www.musicradar.com/news/drums/sampleradar-1000-free-drum-samples-229460
// http://www.findsounds.com/ISAPI/search.dll
import snare from "../audio/snare.mp3";
import crash from "../audio/crash.mp3";
import bass from "../audio/bass.wav";
import floorTom from "../audio/floor-tom.wav";
import tomTom from "../audio/tom-tom.wav";
import ride from "../audio/ride.wav";
import hiHat from "../audio/hi-hat.wav";
import hiHatClosed from "../audio/hi-hat-closed.mp3";
import gong from "../audio/gong.wav";

// import bigFootHh from "../audio/old/hi-hat.wav";
// 81, 87, 69, 65, 83, 68, 90, 88, 67
export default function drumData() {
  return [
    {
      id: 1,
      key: "Q",
      // keyCode: "q",
      keyCode: 81,
      type: "Snare",
      audio: snare
      // audio: bigFootHh
    },
    {
      id: 2,
      key: "W",
      // keyCode: "w",
      keyCode: 87,
      type: "Crash",
      audio: crash
      // audio: bigFootHh
    },
    {
      id: 3,
      key: "E",
      // keyCode: "e",
      keyCode: 69,
      type: "Kick drum",
      audio: bass
      // audio: bigFootHh
    },
    {
      id: 4,
      key: "A",
      // keyCode: "a",
      keyCode: 65,
      type: "Floor tom",
      audio: floorTom
      // audio: bigFootHh
    },
    {
      id: 5,
      key: "S",
      // keyCode: "s",
      keyCode: 83,
      type: "Tom-tom",
      audio: tomTom
      // audio: bigFootHh
    },
    {
      id: 6,
      key: "D",
      // keyCode: "d",
      keyCode: 68,
      type: "Ride",
      audio: ride
      // audio: bigFootHh
    },
    {
      id: 7,
      key: "Z",
      // keyCode: "z",
      keyCode: 90,
      type: "Hi-hat",
      audio: hiHat
      // audio: bigFootHh
    },
    {
      id: 8,
      key: "X",
      // keyCode: "x",
      keyCode: 88,
      type: "Closed hi-hat",
      audio: hiHatClosed
      // audio: bigFootHh
    },
    {
      id: 9,
      key: "C",
      // keyCode: "c",
      keyCode: 67,
      type: "Gong",
      audio: gong
      // audio: bigFootHh
    }
  ];
}
