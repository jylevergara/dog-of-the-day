

// var JapSpitz


/*
function getRandomIntBetweenZeroAnd(max) {
    return Math.floor((Math.random() * max));
}

function setSomeText(text) {
    var someDiv = document.createElement('div');
    someDiv.innerHTML = text;
    document.body.appendChild(someDiv);
}

// Creates a New <img> element - with JavaScript!
var myImage = document.createElement('img');
// Adds the image to the HTML page - with JavaScript!
document.body.appendChild(myImage);
function putSomeImage(image) {
    // Gives the src for the image - aka the link to the image
    myImage.src = image;
    myImage.classList.add('doggy');
}

var dogPictures = [
    'am.jpg',
    'aymm.jpg',
    'idktd.jpg',
    'pug.jpg',
    'dogday1.jpg',
    'dogday3.jpg',
    'dogday2.jpg',
    'dogday4.jpg',
    'dogday5.webp',
    'dogday6.jpg',
    'dogday7.webp'
];


var textOptions = [
    'yooooooo',
    'heyyyyyy',
    'so fun',
    'i am the fourth one!',
    'fiiii',
    'sex sex sex',
    'lucky numba sev, bro',
    'eighters gonna eight',
    'nine nine!',
    'ten'
];

function submitText() {
    // Get a reference to the element with an id of myInput
    // var val = document.querySelector('#myInput').value;
    // setSomeText(val);
    var rand = getRandomIntBetweenZeroAnd(dogPictures.length);
    console.log('rand', rand);
    putSomeImage(dogPictures[rand]);
}
*/

console.log('$', $);

function getDogImage() {
    $.ajax({
        url: 'https://dog.ceo/api/breeds/image/random',
        success: function (result) {
            console.log('result', result);
            $('#img').attr('src', result.message);
        }
    });
}
getDogImage();
