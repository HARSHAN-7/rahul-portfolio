import React, { useState, useRef } from 'react';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';

export const AmbientSoundToggle: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  const toggleSound = () => {
    if (!isPlaying) {
      // Create Web Audio API Ambient Pad Generator (Warm 432Hz literary aura tone)
      try {
        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
        const ctx = new AudioContextClass();
        audioCtxRef.current = ctx;

        const masterGain = ctx.createGain();
        masterGain.gain.setValueAtTime(0.08, ctx.currentTime);
        masterGain.connect(ctx.destination);
        gainNodeRef.current = masterGain;

        // Frequencies for a peaceful ambient chord: A (220Hz), E (330Hz), C# (277.18Hz)
        const freqs = [220, 277.18, 330];
        freqs.forEach((freq) => {
          const osc = ctx.createOscillator();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, ctx.currentTime);

          const filter = ctx.createBiquadFilter();
          filter.type = 'lowpass';
          filter.frequency.setValueAtTime(400, ctx.currentTime);

          osc.connect(filter);
          filter.connect(masterGain);
          osc.start();
        });

        setIsPlaying(true);
      } catch (err) {
        console.error(err);
      }
    } else {
      if (gainNodeRef.current && audioCtxRef.current) {
        gainNodeRef.current.gain.exponentialRampToValueAtTime(0.0001, audioCtxRef.current.currentTime + 0.5);
        setTimeout(() => {
          audioCtxRef.current?.close();
          setIsPlaying(false);
        }, 500);
      } else {
        setIsPlaying(false);
      }
    }
  };

  return (
    <button
      onClick={toggleSound}
      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border transition-all text-xs font-mono tracking-wider ${
        isPlaying
          ? 'border-[#D4AF37] bg-[#D4AF37]/20 text-[#D4AF37] shadow-[0_0_12px_rgba(212,175,55,0.3)]'
          : 'border-[#D4AF37]/30 bg-black/40 text-stone-300 hover:border-[#D4AF37]'
      }`}
      title="Toggle Atmospheric Ambient Sound"
    >
      {isPlaying ? (
        <>
          <Volume2 className="w-3.5 h-3.5 text-[#D4AF37] animate-pulse" />
          <span className="text-[10px] font-bold">AMBIENT ON</span>
        </>
      ) : (
        <>
          <VolumeX className="w-3.5 h-3.5 text-stone-400" />
          <span className="text-[10px]">SOUND</span>
        </>
      )}
    </button>
  );
};
