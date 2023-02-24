const time = document.querySelector('.time');
const actualDate = document.querySelector('.date');
const timeGreeting = document.querySelector('.greeting');

function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    setTimeout(showTime, 1000);
    time.textContent = currentTime;
}
showTime();

function showDate() {
    const date = new Date();
    const options = {weekday: 'long', day: 'numeric', month: 'long',  timeZone: 'UTC'};
    let currentDate = date.toLocaleDateString('en-US', options);    
    actualDate.textContent = currentDate;
    setTimeout(showDate,1000)
}
showDate();

function getTimeOfDay() {
    const date = new Date();
    const hours = date.getHours();
    if(hours > 5 && hours < 13){
        timeGreeting.textContent = "Good morning,"
    } else if (hours > 12 && hours < 18){
        timeGreeting.textContent = "Good afternoon,"
    } else if (hours > 17 && hours < 24){
        timeGreeting.textContent = "Good evening,"
    } else {
        timeGreeting.textContent = "Good night,"
    }
}
getTimeOfDay()

async function getLinkToImage() {
    const url = 'https://api.unsplash.com/photos/random?orientation=landscape&query=nature&client_id=6K46aDINKgvB7wDAiy-KzLb8rO8a34oswzbKfEdWofE';
    const res = await fetch(url);
    const data = await res.json();
    return data.urls.regular;
   }
   getLinkToImage()
   