import Player from "../components/Player";

import { useRef, useState, useEffect } from "react";
import m1 from "./assets/1.mp3";
import m2 from "./assets/2.mp3";
import m3 from "./assets/3.mp3";
import "./Music.css";

const App = () => {
  const songsdata = [
    {
      title: "Drake - Forever",
      url: m1,
    },
    {
      title: "Linking Park - In the end",
      url: m2,
    },
    {
      title: "Travis Scott - Stop trina be God",
      url: m3,
    },
  ];
  const [songs, setSongs] = useState(songsdata);
  const [isplaying, setisplaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(songsdata[1]);

  const audioElem = useRef();

  useEffect(() => {
    if (isplaying) {
      audioElem.current.play();
    } else {
      audioElem.current.pause();
    }
  }, [isplaying, currentSong]);

  const onPlaying = () => {
    const duration = audioElem.current.duration;
    const ct = audioElem.current.currentTime;

    setCurrentSong({
      ...currentSong,
      progress: (ct / duration) * 100,
      length: duration,
    });
  };

  return (
    <div className="Music">
      <audio src={currentSong.url} ref={audioElem} onTimeUpdate={onPlaying} />
      <Player
        songs={songs}
        setSongs={setSongs}
        isplaying={isplaying}
        setisplaying={setisplaying}
        audioElem={audioElem}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
      />
    </div>
  );
};

export default App;
