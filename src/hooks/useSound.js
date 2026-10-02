import { useRef, useState } from "react";

export function useSound() {
  const audioContextRef = useRef(null);
  const masterGainRef = useRef(null);
  const oscillatorRef = useRef(null);
  const intervalRef = useRef(null);

  const [playing, setPlaying] = useState(false);

  const startMusic = async () => {
    try {
      // Create AudioContext only after user clicks
      if (!audioContextRef.current) {
        const AudioContext =
          window.AudioContext || window.webkitAudioContext;

        const ctx = new AudioContext();

        audioContextRef.current = ctx;

        const masterGain = ctx.createGain();
        masterGain.gain.value = 0.12;

        masterGain.connect(ctx.destination);

        masterGainRef.current = masterGain;
      }

      const ctx = audioContextRef.current;

      // Resume browser audio
      if (ctx.state === "suspended") {
        await ctx.resume();
      }

      // Stop if already running
      if (oscillatorRef.current) {
        return;
      }

      // Soft background tone
      const oscillator = ctx.createOscillator();
      const gain = ctx.createGain();

      oscillator.type = "sine";
      oscillator.frequency.value = 196;

      gain.gain.value = 0.08;

      oscillator.connect(gain);
      gain.connect(masterGainRef.current);

      oscillator.start();

      oscillatorRef.current = oscillator;

      // Small bell-like tones
      const playBell = () => {
        const bell = ctx.createOscillator();
        const bellGain = ctx.createGain();

        const frequencies = [
          392,
          523.25,
          659.25,
        ];

        const frequency =
          frequencies[
            Math.floor(Math.random() * frequencies.length)
          ];

        bell.type = "sine";
        bell.frequency.value = frequency;

        const now = ctx.currentTime;

        bellGain.gain.setValueAtTime(0.0001, now);

        bellGain.gain.exponentialRampToValueAtTime(
          0.12,
          now + 0.03
        );

        bellGain.gain.exponentialRampToValueAtTime(
          0.0001,
          now + 1.8
        );

        bell.connect(bellGain);
        bellGain.connect(masterGainRef.current);

        bell.start(now);
        bell.stop(now + 2);
      };

      // Play first bell immediately
      playBell();

      // Then periodically
      intervalRef.current = setInterval(
        playBell,
        4000
      );

      setPlaying(true);
    } catch (error) {
      console.error("Audio error:", error);
      setPlaying(false);
    }
  };

  const stopMusic = () => {
    if (oscillatorRef.current) {
      try {
        oscillatorRef.current.stop();
      } catch {
        // Already stopped
      }

      oscillatorRef.current.disconnect();
      oscillatorRef.current = null;
    }

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    setPlaying(false);
  };

  const toggle = async () => {
    if (playing) {
      stopMusic();
    } else {
      await startMusic();
    }
  };

  return {
    playing,
    toggle,
  };
}