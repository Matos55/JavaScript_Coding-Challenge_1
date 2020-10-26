const text = 'My viewers on Twitch are the best!!';

let index = 0;


function writeText() {
    document.body.innerText = text.slice(0, index);   // slice = gives us another array according to the index start/end. Note: end index is not included.
    index++;

    if(index > text.length) {
        index = 0;
    }

    // cuz we are using the slice method and the "end value" does not count, in the IF statement we need to put 'index > text.length' and not 'text.length-1' to see the last character of the string

}

setInterval(writeText, 100); //  The setInterval() method calls a function or evaluates an expression at specified intervals (in milliseconds).
