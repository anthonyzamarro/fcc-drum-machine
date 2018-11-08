// “Sound effects obtained from https://www.zapsplat.com“
// https://www.musicradar.com/news/drums/sampleradar-1000-free-drum-samples-229460
// http://www.findsounds.com/ISAPI/search.dll
import snare from '../audio/snare.mp3';
import crash from '../audio/crash.mp3';
import bass from '../audio/bass.wav';
import floorTom from '../audio/floor-tom.wav';
import tomTom from '../audio/tom-tom.wav';
import ride from '../audio/ride.wav';
import hiHat from '../audio/hi-hat.wav';
import hiHatClosed from '../audio/hi-hat-closed.mp3';
import gong from '../audio/gong.wav';

export default function drumData() {
  return [
    {
      id: 1,
      key: 'Q',
      type: 'snare',
      audio: snare
    },
    {
      id: 2,
      key: 'W',
      type: 'crash',
      audio: crash
    },
    {
      id: 3,
      key: 'E',
      type: 'bass',
      audio: bass
    },
    {
      id: 4,
      key: 'A',
      type: 'floorTom',
      audio: floorTom
    },
    {
      id: 5,
      key: 'S',
      type: 'tomTom',
      audio: tomTom
    },
    {
      id: 6,
      key: 'D',
      type: 'ride',
      audio: ride
    },
    {
      id: 7,
      key: 'Z',
      type: 'hiHat',
      audio: hiHat
    },
    {
      id: 8,
      key: 'X',
      type: 'hiHat',
      audio: hiHatClosed
    },
    {
      id: 9,
      key: 'C',
      type: 'gong',
      audio: gong
    }
  ];
}
