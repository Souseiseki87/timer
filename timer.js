const urlParameter = new URLSearchParams(window.location.search);
const startingMinutes = parseInt(urlParameter.get("time")) || 5;
const scene = urlParameter.get("scene");
//console.log(scene);

let time = startingMinutes * 60;

const countdownEl = document.getElementById('countdown');
const message = document.getElementById('message');
const headline = document.getElementById('headline');

if(scene==="starting"){
    message.innerText = 'Einen kleinen Moment noch <3';
    message.style.display = "block";
    headline.style.display = "block";
}
if(scene==="waiting") {
    message.innerText = 'Bin gleich wieder da';
    message.style.display = "block";
    headline.innerText = 'Kurze Pause';
    headline.style.display = "block";
}


let negative = false

function updateCountdown() {
    if (!negative && time <=0) {
        negative = true;
        if(scene) {
        message.innerText = 'Sorry, ich bin zu spät :(';
        }
    }
    
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    countdownEl.innerText = (negative ? '-' : '') + `${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`;
    //message.innerHTML = (negative ? `Sorry, ich bin zu spät :(` : `Einen kleinen Moment noch <3`);
    if (negative) {
        time++;
    }
    else 
        time--;
}
updateCountdown()
setInterval(updateCountdown, 1000)

