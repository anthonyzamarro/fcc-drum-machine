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

export default function drumData() {
  return [
    {
      id: 1,
      key: "Q",
      keyCode: "q",
      type: "Snare",
      audio: snare
    },
    {
      id: 2,
      key: "W",
      keyCode: "w",
      type: "Crash",
      audio: crash
    },
    {
      id: 3,
      key: "E",
      keyCode: "e",
      type: "Kick drum",
      audio: bass
    },
    {
      id: 4,
      key: "A",
      keyCode: "a",
      type: "Floor tom",
      audio: floorTom
    },
    {
      id: 5,
      key: "S",
      keyCode: "s",
      type: "Tom-tom",
      audio: tomTom
    },
    {
      id: 6,
      key: "D",
      keyCode: "d",
      type: "Ride",
      audio: ride
    },
    {
      id: 7,
      key: "Z",
      keyCode: "z",
      type: "Hi-hat",
      audio: hiHat
    },
    {
      id: 8,
      key: "X",
      keyCode: "x",
      type: "Closed hi-hat",
      audio: hiHatClosed
    },
    {
      id: 9,
      key: "C",
      keyCode: "c",
      type: "Gong",
      audio: gong
    }
  ];
}
