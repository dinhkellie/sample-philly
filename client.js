// import Oscilloscope from '/oscilloscope.js'; // *sigh* maybe one day

const context = new (window.AudioContext || window.webkitAudioContext)();
const oscillator = context.createOscillator();

oscillator.type = 'square';

const filter = context.createBiquadFilter();
filter.type = 'lowpass';
filter.frequency.value = 10000;

const vca = context.createGain();
vca.gain.value = 0;
let attack = 0.1;
let release = 0.1;

const analyzer = context.createAnalyser();
analyzer.fftSize = 2048;

const freqAnalyzer = context.createAnalyser();
freqAnalyzer.fftSize = 128;

const volume = context.createGain();
volume.gain.value = 0.5;

/*
    Arpeggiator         Envelope
        ↓                  ↓  
    Oscillator → Filter → VCA → Volume (VCA) → 👂
*/

oscillator.connect(filter);
filter.connect(vca);
vca.connect(analyzer);
vca.connect(freqAnalyzer);
vca.connect(volume);
volume.connect(context.destination);

const noteOn = function() {
  const now = context.currentTime;
  const gain = vca.gain;

  gain.cancelScheduledValues(now);
  gain.setValueAtTime(0, now);
  gain.linearRampToValueAtTime(1, now + attack);
  gain.linearRampToValueAtTime(0, now + attack + release);
};

// make some noiseeeee
oscillator.start();

// event listeners
document.querySelectorAll('input[name=waveform]').forEach((button) => {
  button.addEventListener('change', (event) => {
    oscillator.type = event.target.value;
  });
});

const cutoff = document.getElementById('cutoff');
cutoff.addEventListener('input', (event) => {
  filter.frequency.value = event.target.value;
});

const resonance = document.getElementById('resonance');
resonance.addEventListener('input', (event) => {
  filter.Q.value = event.target.value;
});

document.getElementById('attack').addEventListener('input', (event) => attack = event.target.value / 100);
document.getElementById('release').addEventListener('input', (event) => release = event.target.value / 100);
document.getElementById('volume').addEventListener('input', (event) => volume.gain.value = event.target.value / 100);

// start the arpeggiator
const arpeggiator = new Worker('arpeggiator.js');
arpeggiator.onmessage = (event) => {
  oscillator.frequency.value = event.data;
  noteOn();
}

const oscopeEl = document.getElementById('oscilloscope');
const oscilloscope = new Oscilloscope(oscopeEl, analyzer);
oscilloscope.start();

const freqEl = document.getElementById('frequency');
const frequency = new Frequency(freqEl, freqAnalyzer);
frequency.start();