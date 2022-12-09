const colours = ["green", "red", "blue", "orange", "yellow", "purple", "cyan", "violet", "pink", "magenta", "silver", "grey", "brown", "gold", "coral", "bisque", "azure", "aquamarine", "aqua"];
const btn = document.getElementById('btn');
const colour = document.querySelector('.colour');

btn.addEventListener('click',function(){
    console.log(document.body);
    //the goal is to get a random number between 0-18 colours colours

    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    document.body.style.backgroundColor = colours[randomNumber];
    colour.textContent = colours[randomNumber];
});
function getRandomNumber(){
    return Math.floor(Math.random()*colours.length);
}