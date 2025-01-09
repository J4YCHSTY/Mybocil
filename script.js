function toggleGif() {
    const gifImage = document.getElementById('gifImage');
    if (gifImage.src.includes('amvelope')) {
        gifImage.src = 'bocil_new.gif';
    } else {
        gifImage.src = 'amvelope.gif';
    }
}

function audioGif() {
    const gifImage = document.getElementById('audiogifImage');
    if (gifImage.src.includes('click')) {
        gifImage.src = 'audio.gif';
    } else {
        gifImage.src = 'click.gif';
    }

    const audio = document.getElementById('myAudio');
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
}

function secret() {
    const inputText = document.getElementById('secretInput').value;

    if (inputText != "none") {
        alert('NET NOTT SALAHH');
    }
    else {
        alert('yeayy')
    }
}
