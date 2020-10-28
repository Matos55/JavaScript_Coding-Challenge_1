function createHeart() {
    const heart = document.createElement('div'); /*create a div */
    heart.classList.add('heart');   /*add class heart to div */

    heart.style.left = Math.random() * 100 + 'vw'; /* everytime the function is called, adjust from the left, a random number between [0-100] of the view width */
    heart.style.animationDuration = Math.random() * 2 + 3 + "s"; /* change the duration ((falling)) each time the function it's called. */

    heart.innerText = 'Purple_Heart'; /* text of div */
 
    document.body.appendChild(heart); /* put the div in the html body */

    setTimeout(() => {
        heart.remove();
    }, 5000);
    
}

setInterval(createHeart, 300); /* run the function every 300 ms */