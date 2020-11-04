const imgs = document.getElementById('imgs');
const img = document.querySelectorAll('#imgs img');

let idx = 0;

function run() {
    idx++;

    if(idx > img.length - 1) {
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 500}px)`;   /* each iteration: move to the left 500px = new picture next to it, untill idx is reset */

}

setInterval(run, 2000);