var philly = new Audio();
philly.src = "https://cdn.glitch.com/fa419486-c10f-4f12-bf62-aacd1e70bc21%2FBruce%20Springsteen%20-%20Streets%20Of%20Philadelphia.mp3?1512372770613";

function PlaySound() {
    if (philly.paused) {
        philly.play();
    } else {
        philly.pause();
    }
}

function Restart() {
    philly.currentTime = 0;
    philly.play();
}

function Stop() {
    philly.currentTime = 0;
    philly.pause();
}

//var context;
//window.addEventListener('load', init, false);
//function init() {
//  try {
//    // Fix up for prefixing
//    window.AudioContext = window.AudioContext||window.webkitAudioContext;
//    context = new AudioContext();
//  }
//  catch(e) {
//    alert('Web Audio API is not supported in this browser');
//  }
//}
//
//var gainNode = context.createGain();





//var audioContext, osc, gain;
//var freqSlider = document.querySelector('.freq-slider'),
//    gainSlider = document.querySelector('.gain-slider');
//
//init();
//
//freqSlider.oninput = function() {
//    changeFreq(freqSlider.value);
//}
//
//gainSlider.oninput = function() {
//    changeGain(gainSlider.value);
//}
//
//function init() {
//    audioContext = new(window.AudioContext || window.webkitAudioContext)();
//    gain = audioContext.createGain();
//    gain.gain.value = 1;
//    osc = audioContext.createOscillator();
//    osc.type = 'sine';
//    osc.frequency.value = 440;
//    osc.detune.value = 0;
//    osc.connect(gain);
//    osc.start(0);
//}
//
//function start() {
//    UI('start');
//    gain.connect(audioContext.destination);
//}
//
//function stop() {
//    UI('stop');
//    gain.disconnect(audioContext.destination);
//}
//
//function changeType(type) {
//    osc.type = type;
//}
//
//// change frequency
//function changeFreq(freq) {
//    osc.frequency.value = freq;
//    freqDisplay.innerHTML = freq + 'Hz';
//}
//
//// change gain
//function changeGain(volume) {
//    gain.gain.value = volume;
//    gainDisplay.innerHTML = volume;
//}
//
//// utilities
//function addEventListenerBySelector(selector, event, fn) {
//    var list = document.querySelectorAll(selector);
//    for (var i = 0, len = list.length; i < len; i++) {
//        list[i].addEventListener(event, fn, false);
//    }
//}
//
//function UI(state) {
//    switch (state) {
//        case 'start':
//            startButton.disabled = true;
//            waveformButtons.disable = false;
//            stopButton.disabled = false;
//            break;
//        case 'stop':
//            startButton.disabled = false;
//            waveformButtons.disable = true;
//            stopButton.disabled = true;
//            break;
//    }
//}
//
///* ios enable sound output */
//	window.addEventListener('touchstart', function(){
//		//create empty buffer
//		var buffer = audioContext.createBuffer(1, 1, 22050);
//		var source = audioContext.createBufferSource();
//		source.buffer = buffer;
//		source.connect(audioContext.destination);
//		source.start(0);
//	}, false);