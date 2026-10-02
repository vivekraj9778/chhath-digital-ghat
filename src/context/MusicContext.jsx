import { createContext, useContext, useState, useRef, useEffect } from "react";

const playlist = [
  {
    id: 1,
    title: "छठी मईया (Chhathi Maiya) — The Vvaan",
    singer: "Vishal Mishra (विशाल मिश्रा) • Film: The Vvaan",
    src: "/audio/vvan-chhathi-maiya.mp3",
    tag: "Movie Special (The Vvaan)"
  },
  {
    id: 2,
    title: "मारबो रे सुगवा धनुष से (Marbo Re Sugwa Dhanush Se)",
    singer: "Padma Bhushan Sharda Sinha (शारदा सिन्हा)",
    src: "/audio/marbo-re-sugwa.mp3",
    tag: "Iconic Chhath Classic"
  },
  {
    id: 3,
    title: "सोने के खड़ाउवा हे दीनानाथ (Sone Ke Khadauwa He Dinanath)",
    singer: "Padma Bhushan Sharda Sinha (शारदा सिन्हा)",
    src: "/audio/sone-ke-khadauwa.mp3",
    tag: "Surya Arghya Geet"
  },
  {
    id: 4,
    title: "काँपि काँपि बोले सुरुज देव (Kopi Kopi Bol Ke Suruj Dev)",
    singer: "Traditional Chhath Hymn (छठ लोकगीत)",
    src: "/audio/kopi-kopi-bol-suruj-dev.mp3",
    tag: "Divine Hymn"
  },
  {
    id: 5,
    title: "मोरा भैया जईहे ला (Mora Bhaiya Jaiye La)",
    singer: "Chhath Mahaparv Devotional Choir",
    src: "/audio/mora-bhaiya-jaiye-la.mp3",
    tag: "Ghat March Geet"
  },
  {
    id: 6,
    title: "हो दीनानाथ (Ho Deenanath)",
    singer: "Padma Bhushan Sharda Sinha (शारदा सिन्हा)",
    src: "/audio/ho-deenanath.mp3",
    tag: "Sharda Sinha Classic"
  },
  {
    id: 7,
    title: "केलवा के पात पर (Kelva Ke Paat Par)",
    singer: "Padma Bhushan Sharda Sinha (शारदा सिन्हा)",
    src: "/audio/kelva-ke-paat-par.mp3",
    tag: "Evergreen Chhath Geet"
  },
  {
    id: 8,
    title: "केरवा जे फरेला घवद से (Kerwa Je Farela)",
    singer: "Pappu Mishra Ujjwal",
    src: "/audio/kerwa-je-farela.mp3",
    tag: "Arghya Geet"
  },
  {
    id: 9,
    title: "उगहे सूरज देव भेला भिनुसरबा (Ugahe Suraj Dev)",
    singer: "Vindhyavasini Devi (विन्ध्यवासिनी देवी)",
    src: "/audio/ugahe-suraj-dev.mp3",
    tag: "Pratah Arghya Geet"
  },
  {
    id: 10,
    title: "पवित्र गंगा तट व संध्या आरती (Sacred Ganga Ghat Ambience)",
    singer: "Temple Bells, Conch (शंख) & Flowing Ganga",
    src: "/audio/river-ambience.mp3",
    tag: "Atmospheric Aarti"
  }
];

const MusicContext = createContext(null);

export function MusicProvider({ children }) {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.85);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const audioRef = useRef(null);

  const currentTrack = playlist[currentTrackIndex];

  // Initialize Audio instance
  useEffect(() => {
    const audio = new Audio();
    audio.src = currentTrack.src;
    audio.preload = "auto";
    audio.volume = isMuted ? 0 : volume;
    audioRef.current = audio;

    const handleLoadedMetadata = () => {
      setDuration(audio.duration || 0);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime || 0);
    };

    const handleEnded = () => {
      nextTrack();
    };

    const handleError = (e) => {
      console.warn("Audio element error:", audio.error);
    };

    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("error", handleError);

    return () => {
      audio.pause();
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("error", handleError);
    };
  }, []);

  // Handle track switch
  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.pause();
    audioRef.current.src = currentTrack.src;
    audioRef.current.load();

    if (isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(err => {
          console.warn("Playback prevented:", err);
          setIsPlaying(false);
        });
      }
    }
  }, [currentTrackIndex]);

  // Handle volume / mute change
  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.volume = isMuted ? 0 : volume;
  }, [volume, isMuted]);

  const togglePlay = async () => {
    setHasInteracted(true);
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      try {
        if (!audioRef.current.src || audioRef.current.src === "" || audioRef.current.src.endsWith("/")) {
          audioRef.current.src = currentTrack.src;
          audioRef.current.load();
        }
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (err) {
        console.warn("Play error:", err);
        setIsPlaying(false);
      }
    }
  };

  const nextTrack = () => {
    setCurrentTrackIndex(prev => (prev + 1) % playlist.length);
  };

  const prevTrack = () => {
    setCurrentTrackIndex(prev => (prev - 1 + playlist.length) % playlist.length);
  };

  const selectTrack = (index) => {
    setHasInteracted(true);
    if (index === currentTrackIndex) {
      togglePlay();
      return;
    }
    setCurrentTrackIndex(index);
    setIsPlaying(true);
  };

  const seek = (time) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const toggleMute = () => {
    setIsMuted(m => !m);
  };

  return (
    <MusicContext.Provider value={{
      playlist,
      currentTrack,
      currentTrackIndex,
      isPlaying,
      volume,
      setVolume,
      isMuted,
      toggleMute,
      currentTime,
      duration,
      isExpanded,
      setIsExpanded,
      hasInteracted,
      togglePlay,
      nextTrack,
      prevTrack,
      selectTrack,
      seek
    }}>
      {children}
    </MusicContext.Provider>
  );
}

export const useMusic = () => useContext(MusicContext);
