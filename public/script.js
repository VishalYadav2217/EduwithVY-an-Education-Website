const quoteElement = document.getElementById('quote');
const quoteText = "Education unlocks endless possibilities; embrace it, empower yourself, and shape your own destiny with knowledge and determination.";
const words = quoteText.split(' ');
let index = 0;

function writeQuote() {
    if (index < words.length) {
        let line = '';
        for (let i = 0; i < 5 && index < words.length; i++, index++) {
            line += words[index] + ' ';
        }
        quoteElement.innerHTML += '<span style="color: ' + rainbowColor() + '; font-size: 18px;">' + line.trim() + '</span><br>';
        setTimeout(writeQuote, 1000); // Reduced displaying time to 100 milliseconds
    }
}

function rainbowColor() {
    const frequency = 0.1;
    const center = 128;
    const width = 127;
    const red = Math.sin(frequency * index + 0) * width + center;
    const green = Math.sin(frequency * index + 2) * width + center;
    const blue = Math.sin(frequency * index + 4) * width + center;
    return 'rgb(' + red + ',' + green + ',' + blue + ')';
}

writeQuote();
