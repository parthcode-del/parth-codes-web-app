// Procedural Web Audio synthesizer for Spider-Verse SFX & Multiverse Mixtape beats

class MultiverseAudioEngine {
  private ctx: AudioContext | null = null;
  private isMusicPlaying = false;
  private beatTimer: number | null = null;
  private currentTrackName = '';
  private tempo = 138;
  private step = 0;
  private masterGain: GainNode | null = null;

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.3, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Comic Sound FX
  playThwip() {
    try {
      this.initContext();
      if (!this.ctx || !this.masterGain) return;
      const t = this.ctx.currentTime;
      
      // High pitch sweep down + filtered noise
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(880, t);
      osc.frequency.exponentialRampToValueAtTime(140, t + 0.15);

      gain.gain.setValueAtTime(0.5, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.15);

      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start(t);
      osc.stop(t + 0.16);

      // White noise puff
      const bufferSize = this.ctx.sampleRate * 0.12;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }
      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1200, t);
      filter.frequency.exponentialRampToValueAtTime(300, t + 0.12);
      const noiseGain = this.ctx.createGain();
      noiseGain.gain.setValueAtTime(0.4, t);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, t + 0.12);

      noise.connect(filter);
      filter.connect(noiseGain);
      noiseGain.connect(this.masterGain);
      noise.start(t);
      noise.stop(t + 0.13);
    } catch {
      // Audio not supported or blocked
    }
  }

  playBzzzt() {
    try {
      this.initContext();
      if (!this.ctx || !this.masterGain) return;
      const t = this.ctx.currentTime;
      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc1.type = 'sawtooth';
      osc2.type = 'sawtooth';
      osc1.frequency.setValueAtTime(160, t);
      osc2.frequency.setValueAtTime(165, t);

      gain.gain.setValueAtTime(0.3, t);
      gain.gain.linearRampToValueAtTime(0.5, t + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.28);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(this.masterGain);

      osc1.start(t);
      osc2.start(t);
      osc1.stop(t + 0.29);
      osc2.stop(t + 0.29);
    } catch {}
  }

  playPow() {
    try {
      this.initContext();
      if (!this.ctx || !this.masterGain) return;
      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(260, t);
      osc.frequency.exponentialRampToValueAtTime(45, t + 0.25);

      gain.gain.setValueAtTime(0.8, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.35);

      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start(t);
      osc.stop(t + 0.36);
    } catch {}
  }

  playVenomBurst() {
    try {
      this.initContext();
      if (!this.ctx || !this.masterGain) return;
      const t = this.ctx.currentTime;

      // Electric spark arpeggiation
      [440, 660, 880, 1320, 1760].forEach((freq, idx) => {
        if (!this.ctx || !this.masterGain) return;
        const osc = this.ctx.createOscillator();
        const g = this.ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(freq, t + idx * 0.04);
        g.gain.setValueAtTime(0.2, t + idx * 0.04);
        g.gain.exponentialRampToValueAtTime(0.001, t + idx * 0.04 + 0.15);

        osc.connect(g);
        g.connect(this.masterGain);
        osc.start(t + idx * 0.04);
        osc.stop(t + idx * 0.04 + 0.16);
      });
    } catch {}
  }

  playPortalWarp() {
    try {
      this.initContext();
      if (!this.ctx || !this.masterGain) return;
      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(110, t);
      osc.frequency.exponentialRampToValueAtTime(660, t + 0.5);
      osc.frequency.exponentialRampToValueAtTime(220, t + 1.0);

      gain.gain.setValueAtTime(0.1, t);
      gain.gain.linearRampToValueAtTime(0.5, t + 0.4);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 1.1);

      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start(t);
      osc.stop(t + 1.2);
    } catch {}
  }

  // Interactive Procedural Mixtape Synthesizer
  toggleMixtape(trackName = 'SPIDER-PUNK REMIX'): boolean {
    this.initContext();
    if (this.isMusicPlaying && this.currentTrackName === trackName) {
      this.stopMusic();
      return false;
    } else {
      this.stopMusic();
      this.startMusic(trackName);
      return true;
    }
  }

  getIsPlaying(): boolean {
    return this.isMusicPlaying;
  }

  getCurrentTrack(): string {
    return this.currentTrackName;
  }

  private startMusic(trackName: string) {
    this.initContext();
    this.isMusicPlaying = true;
    this.currentTrackName = trackName;
    this.step = 0;

    if (trackName.includes('PUNK')) {
      this.tempo = 155;
    } else if (trackName.includes('SUNFLOWER') || trackName.includes('BROOKLYN')) {
      this.tempo = 94;
    } else {
      this.tempo = 128;
    }

    const intervalMs = (60 / this.tempo / 4) * 1000;
    this.beatTimer = window.setInterval(() => {
      this.playBeatStep();
    }, intervalMs);
  }

  stopMusic() {
    if (this.beatTimer !== null) {
      clearInterval(this.beatTimer);
      this.beatTimer = null;
    }
    this.isMusicPlaying = false;
  }

  private playBeatStep() {
    if (!this.ctx || !this.masterGain) return;
    const t = this.ctx.currentTime;
    const s = this.step % 16;

    // Kick drum on 0, 4, 8, 12 (or lo-fi boom bap)
    if (s === 0 || s === 6 || s === 10) {
      const osc = this.ctx.createOscillator();
      const g = this.ctx.createGain();
      osc.frequency.setValueAtTime(140, t);
      osc.frequency.exponentialRampToValueAtTime(38, t + 0.12);
      g.gain.setValueAtTime(0.4, t);
      g.gain.exponentialRampToValueAtTime(0.001, t + 0.16);
      osc.connect(g);
      g.connect(this.masterGain);
      osc.start(t);
      osc.stop(t + 0.17);
    }

    // Snare / clap on 4, 12
    if (s === 4 || s === 12) {
      const osc = this.ctx.createOscillator();
      const g = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(220, t);
      g.gain.setValueAtTime(0.2, t);
      g.gain.exponentialRampToValueAtTime(0.001, t + 0.1);
      osc.connect(g);
      g.connect(this.masterGain);
      osc.start(t);
      osc.stop(t + 0.11);
    }

    // Hi-hat on every odd step
    if (s % 2 === 0) {
      const osc = this.ctx.createOscillator();
      const g = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(5000, t);
      g.gain.setValueAtTime(0.05, t);
      g.gain.exponentialRampToValueAtTime(0.001, t + 0.04);
      osc.connect(g);
      g.connect(this.masterGain);
      osc.start(t);
      osc.stop(t + 0.05);
    }

    // Cyber Synth Bass line Notes
    const bassNotes = [110, 110, 130.8, 146.8, 110, 98, 110, 164.8];
    const note = bassNotes[(Math.floor(this.step / 2)) % bassNotes.length];
    if (s % 4 === 0) {
      const bassOsc = this.ctx.createOscillator();
      const bassGain = this.ctx.createGain();
      bassOsc.type = this.currentTrackName.includes('PUNK') ? 'sawtooth' : 'sine';
      bassOsc.frequency.setValueAtTime(note, t);
      bassGain.gain.setValueAtTime(0.15, t);
      bassGain.gain.exponentialRampToValueAtTime(0.001, t + 0.22);
      bassOsc.connect(bassGain);
      bassGain.connect(this.masterGain);
      bassOsc.start(t);
      bassOsc.stop(t + 0.24);
    }

    this.step++;
  }
}

export const multiverseAudio = new MultiverseAudioEngine();
