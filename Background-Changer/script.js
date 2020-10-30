const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    document.body.style.background = randomBg()

    console.log(randomBg());
});



/* 

hsl = The hsl() function define colors using the Hue-saturation-lightness model (HSL).

hue        ===>	Defines a degree on the color wheel (from 0 to 360) - 0 (or 360) is red, 120 is green, 240 is blue.
saturation ===>	Defines the saturation; 0% is a shade of gray and 100% is the full color (full saturation).
lightness  ===>	Defines the lightness; 0% is black, 50% is normal, and 100% is white.

*/


function randomBg() {
    return `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
}