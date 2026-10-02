import { useState } from "react";
import { 
  Play, 
  Pause, 
  SkipForward, 
  SkipBack, 
  Volume2, 
  VolumeX, 
  Music, 
  ChevronUp, 
  ChevronDown, 
  Sparkles,
  Disc3,
  Radio
} from "lucide-react";
import { useMusic } from "../../context/MusicContext";
import "./MusicPlayer.css";

function formatTime(seconds) {
  if (isNaN(seconds)) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
}

export default function MusicPlayer() {
  const {
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
    togglePlay,
    nextTrack,
    prevTrack,
    selectTrack,
    seek
  } = useMusic();

  const [hoverScrub, setHoverScrub] = useState(false);

  const handleSliderChange = (e) => {
    const newTime = parseFloat(e.target.value);
    seek(newTime);
  };

  return (
    <div className={`chhath-music-wrapper ${isExpanded ? "expanded" : "collapsed"}`}>
      {/* Floating Mini Controller Bar */}
      <div className="music-bar-container">
        {/* Disc & Equalizer Icon */}
        <div className="track-identity" onClick={() => setIsExpanded(!isExpanded)}>
          <div className={`album-art-disc ${isPlaying ? "spinning" : ""}`}>
            <Disc3 size={24} className="disc-icon" />
          </div>
          <div className="track-details">
            <span className="now-playing-tag">
              {isPlaying ? (
                <>
                  <span className="sound-wave">
                    <span></span><span></span><span></span><span></span>
                  </span>
                  NOW PLAYING CHHATH GEET
                </>
              ) : (
                "CHHATH DEVOTIONAL JUKEBOX"
              )}
            </span>
            <h4 className="track-name">{currentTrack.title}</h4>
            <span className="track-artist">{currentTrack.singer}</span>
          </div>
        </div>

        {/* Playback Controls */}
        <div className="playback-center">
          <div className="buttons-row">
            <button 
              className="ctrl-btn prev-btn" 
              onClick={prevTrack} 
              title="Previous Song"
              aria-label="Previous Song"
            >
              <SkipBack size={18} />
            </button>

            <button 
              className={`ctrl-btn play-master-btn ${isPlaying ? "playing" : ""}`} 
              onClick={togglePlay}
              title={isPlaying ? "Pause Song" : "Play Chhath Song"}
              aria-label="Play or Pause"
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} className="play-icon-offset" />}
            </button>

            <button 
              className="ctrl-btn next-btn" 
              onClick={nextTrack} 
              title="Next Song"
              aria-label="Next Song"
            >
              <SkipForward size={18} />
            </button>
          </div>

          {/* Timeline Scrubber */}
          <div className="timeline-row">
            <span className="time-text">{formatTime(currentTime)}</span>
            <input 
              type="range" 
              min="0" 
              max={duration || 100} 
              value={currentTime || 0} 
              onChange={handleSliderChange}
              className="timeline-slider"
              aria-label="Track progress"
            />
            <span className="time-text">{formatTime(duration)}</span>
          </div>
        </div>

        {/* Volume & Drawer Toggle */}
        <div className="extras-right">
          <div className="volume-control">
            <button className="vol-btn" onClick={toggleMute} aria-label="Mute or Unmute">
              {isMuted || volume === 0 ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
            <input 
              type="range" 
              min="0" 
              max="1" 
              step="0.05" 
              value={isMuted ? 0 : volume} 
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="volume-slider"
              aria-label="Volume slider"
            />
          </div>

          <button 
            className="expand-drawer-btn" 
            onClick={() => setIsExpanded(!isExpanded)}
            title={isExpanded ? "Hide Playlist" : "Show Playlist"}
            aria-label="Toggle Playlist"
          >
            {isExpanded ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
          </button>
        </div>
      </div>

      {/* Expanded Playlist Drawer */}
      {isExpanded && (
        <div className="playlist-drawer card">
          <div className="drawer-header">
            <div className="drawer-title">
              <Sparkles size={16} className="gold-text" />
              <h4>Sacred Chhath Puja Hymns & Geets (छठ महापर्व भजन)</h4>
            </div>
            <span className="drawer-subtitle">{playlist.length} Iconic Devotional Tracks</span>
          </div>

          <div className="track-list">
            {playlist.map((track, idx) => {
              const isSelected = idx === currentTrackIndex;
              return (
                <div 
                  key={track.id} 
                  className={`playlist-item ${isSelected ? "active" : ""}`}
                  onClick={() => selectTrack(idx)}
                >
                  <div className="item-order">
                    {isSelected && isPlaying ? (
                      <span className="active-wave">
                        <span></span><span></span><span></span>
                      </span>
                    ) : (
                      <span>{track.id < 10 ? `0${track.id}` : track.id}</span>
                    )}
                  </div>

                  <div className="item-info">
                    <h5 className="item-title">{track.title}</h5>
                    <span className="item-artist">{track.singer}</span>
                  </div>

                  <span className="item-tag">{track.tag}</span>

                  <button className="item-play-btn" aria-label="Play track">
                    {isSelected && isPlaying ? <Pause size={14} /> : <Play size={14} />}
                  </button>
                </div>
              );
            })}
          </div>

          <div className="drawer-tribute">
            <small>
              🙏 Devotional tribute to <strong>Padma Bhushan Sharda Sinha</strong> — the eternal voice of Chhath Mahaparv.
            </small>
          </div>
        </div>
      )}
    </div>
  );
}
