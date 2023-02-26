import playList from './playList.js';
let arr;
console.log(playList);

const time = document.querySelector('.time');
const actualDate = document.querySelector('.date');
const timeGreeting = document.querySelector('.greeting');
const yourName = document.querySelector('.name');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const quoteBtn = document.querySelector('.change-quote')
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const printCity = document.querySelector('.city');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');

const nextSlide = document.querySelector('.slide-next'); 
const prevSlide = document.querySelector('.slide-prev');

const playerStop = document.querySelector('.pause') 
const playerPlay = document.querySelector('.play') 
const playerPrev = document.querySelector('.play-prev') 
const playerNext = document.querySelector('.play-next')
const playlist = document.querySelector('.play-list')

const quoteList = [
    {
        "text": "Чем умнее человек, тем легче он признает себя дураком.",
        "author": "Альберт Эйнштейн"
      },
      {
        "text": "Никогда не ошибается тот, кто ничего не делает.",
        "author": "Теодор Рузвельт"
      },
      {
        "text": "Менее всего просты люди, желающие казаться простыми",
        "author": "Лев Николаевич Толстой"
      },
      {
        "text": "Мы находимся здесь, чтобы внести свой вклад в этот мир. Иначе зачем мы здесь?",
        "author": "Стив Джобс"
      },
      {
        "text": "Мода проходит, стиль остаётся.",
        "author": "Коко Шанель"
      },
      {
        "text": "Если человек не нашёл, за что может умереть, он не способен жить.",
        "author": "Мартин Лютер Кинг"
      },
      {
        "text": "Музыка заводит сердца так, что пляшет и поёт тело. А есть музыка, с которой хочется поделиться всем, что наболело.",
        "author": "Джон Леннон"
      },
      {
        "text": "Если кто-то причинил тебе зло, не мсти. Сядь на берегу реки, и вскоре ты увидишь, как мимо тебя проплывает труп твоего врага.",
        "author": "Лао-цзы"
      },
      {
        "text": "Лучше быть хорошим человеком, 'ругающимся матом', чем тихой, воспитанной тварью",
        "author": "Фаина Раневская"
      },
      {
        "text": "Сегодня я боролся с тупостью. И тупость победила.",
        "author": "Хьюи Фримэн"
      },
      {
        "text": "Если тебе тяжело, значит ты поднимаешься в гору. Если тебе легко, значит ты летишь в пропасть",
        "author": "Генри Форд"
      },
      {
        "text": "Мой способ шутить – это говорить правду. На свете нет ничего смешнее.",
        "author": "Бернард Шоу"
      },
      {
        "text": "Чем больше любви, мудрости, красоты, доброты вы откроете в самом себе, тем больше вы заметите их в окружающем мире.",
        "author": "Мать Тереза"
      },
      {
        "text": "Единственный человек, с которым вы должны сравнивать себя, – это вы в прошлом. И единственный человек, лучше которого вы должны быть, – это вы сейчас.",
        "author": "Зигмунд Фрейд"
      },
      {
        "text": "Беззубый волк сделал последние минуты зайца незабываемыми.",
        "author": "Дмитрий Бушуев"
      },
      {
        "text": "Невозможность писать для меня равносильна погребению заживо...",
        "author": "Михаил Булгаков"
      },
      {
        "text": "Music is the soul of language.",
        "author": "Max Heindel"
      },
      {
        "text": "История – самый лучший учитель, у которого самые плохие ученики.",
        "author": "Индира Ганди"
      },
      {
        "text": "Success is the ability to go from failure to failure without losing your enthusiasm.",
        "author": "Winston Churchill"
      },
      {
        "text": "Дай человеку власть, и ты узнаешь, кто он.",
        "author": "Наполеон Бонапарт"
      },
      {
        "text": "Ядерную войну невозможно выиграть.",
        "author": "Андрей Сахаров"
      },
      {
        "text": "Поражение? Я не понимаю значения этого слова.",
        "author": "Маргарет Тэтчер"
      },
      {
        "text": "Комедия – это очень серьёзное дело!",
        "author": "Юрий Никулин"
      }
]
/* Start Current time */
function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    setTimeout(showTime, 1000);
    time.textContent = currentTime;
}
showTime();
/* End Current time */

/* Start Current date */
function showDate() {
    const date = new Date();
    const options = {weekday: 'long', day: 'numeric', month: 'long',  timeZone: 'UTC'};
    let currentDate = date.toLocaleDateString('en-US', options);    
    actualDate.textContent = currentDate;
    setTimeout(showDate,1000)
}
showDate();
/* End Current date */

/* Start greeting */
function getTimeOfDay() {
    const date = new Date();
    const hours = date.getHours();
    if(hours >= 6 && hours < 12){
        timeGreeting.textContent = "Good morning,"
    } else if (hours >= 12 && hours < 18){
        timeGreeting.textContent = "Good afternoon,"
    } else if (hours >= 18 && hours < 24){
        timeGreeting.textContent = "Good evening,"
    } else {
        timeGreeting.textContent = "Good night,"
    }
}
getTimeOfDay()
/* End greeting */

/* Start Local storage */
function setLocalStorage() {
    localStorage.setItem('name', yourName.value);
    localStorage.setItem('city', printCity.value);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
    if(localStorage.getItem('name')) {
      yourName.value = localStorage.getItem('name');
    }    
    if(localStorage.getItem('city') == null || localStorage.getItem('city') == '') {            
      localStorage.setItem('city', `Kyiv`);      
      getWeather();
    }  
    if(localStorage.getItem('city')) {
      printCity.value = localStorage.getItem('city');
    }
    getWeather();
}
window.addEventListener('load', getLocalStorage)
/* End Local storage */

/* Start Quotes */
quoteBtn.addEventListener('click', () => {
    getQuotes()
})
// async function getQuotes() {  
//     let randQuote = Math.floor(Math.random() * (23 - 1 + 1)) + 1;
//     const quotes = 'data.json';
//     const res = await fetch(quotes);
//     const data = await res.json(); 
//     console.log(data);
//     quote.textContent = data[randQuote].text;
//     author.textContent = data[randQuote].author;
//   }
//   getQuotes();
function getQuotes() {
let randQuote = Math.floor(Math.random() * (23 - 1 + 1)) + 1;    
    quote.textContent = quoteList[randQuote].text;
    author.textContent = quoteList[randQuote].author;
};
getQuotes();
/* End Quotes */

async function getLinkToImage() {
    const url = 'https://api.unsplash.com/photos/random?orientation=landscape&query=nature&client_id=6K46aDINKgvB7wDAiy-KzLb8rO8a34oswzbKfEdWofE';
    const res = await fetch(url);
    const data = await res.json();
    return data.urls.regular;
   }
   getLinkToImage()
  
/*Start weather */
printCity.addEventListener('change', () => {
  localStorage.setItem('city', printCity.value);
  getWeather();
})

async function getWeather() {  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${printCity.value}&lang=en&appid=1c08593b81bd72da4d8fdd7849d743a3&units=metric`;
  const res = await fetch(url);
  const data = await res.json(); 
  weatherIcon.className = 'weather-icon owf';
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${Math.round(data.main.temp)}°C`;
  weatherDescription.textContent = data.weather[0].description;
  wind.textContent = `Wind speed: ${Math.round(Math.round(data.wind.speed))} km/h`;
  humidity.textContent = `Humidity: ${data.main.humidity} %`;    
}
/*End weather */

/*Start slider */
const link = 'https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/';
let randNumber = Math.floor(Math.random() * (20 - 1 + 1)) + 1;

function getDayTime() {
  const date = new Date();
  const hours = date.getHours();
  if(hours >= 6 && hours < 12){
      return "morning/"
  } else if(hours >= 12 && hours < 18){
      return "afternoon/"
  } else if(hours >= 18 && hours < 24){
      return "evening/"
  } else {
      return "night/"
  }
}

function setBg() {  
  const img = new Image();
  let dayTime = getDayTime();
  if(String(randNumber).length < 2) {
      img.src = `${link}${dayTime}${String(randNumber).padStart(2,"0")}.jpg`
  } else {
      img.src = `${link}${dayTime}${randNumber}.jpg`
  }  
  img.addEventListener('load', () => {
    document.body.style.backgroundImage = `url(${img.src})`;
  })
}
setBg()

nextSlide.addEventListener('click', getSlideNext);
function getSlideNext () {
  if(randNumber == 20) {
    randNumber = 1
  } else {
    randNumber++;
  }
  setBg()
}
prevSlide.addEventListener('click', getSlidePrev);
function getSlidePrev () {
  if(randNumber == 1) {
    randNumber = 20;
  } else {
    randNumber--;
  }
  setBg()
}
/*End slider */

/*Start audio */
let isPlay = false;
let n = 0;

const audio = new Audio();
audio.src = playList[n].src;

// function playAudio() {
//   // audio.src = 'https://7oom.ru/audio/naturesounds/07%20Birds%20(7oom.ru).mp3';
//   audio.currentTime = 0;
//   // audio.play();
// }

// playerStop.addEventListener('click', pauseAudio);
// function pauseAudio() {
//   audio.pause();
// }

playerNext.onclick = function(){selecting_track(1)};
playerPrev.onclick = function(){selecting_track(-1)};
function selecting_track(direction){
    n += direction;
    if(n >= playList.length) n = 0;
    if(n < 0) n = playList.length - 1;
    audio.src = playList[n].src;
    audio.play();    
}

// playerPrev.addEventListener('click', () => { 
//       if(n < 0) n = playList.length - 1;
//         audio.src = playList[n].src;
//         n--;  
//         audio.play();
       
// })

// playerNext.addEventListener('click', () => {
//       if(n >= playList.length) n = 0;
//         audio.src = playList[n].src;
//         n++; 
//         audio.play();
         
// })

function audioPlayer() {
  if(isPlay == false) {
      audio.play();
      isPlay = true
  } else {
      audio.pause()
      isPlay = false
  }
  arr[n].classList.toggle('play-item');  
}

playerPlay.addEventListener('click', () => {  
  playerPlay.classList.toggle('pause');  
  audioPlayer();
  playAudio();
})

// audio.onended = function () {
//       n++;
//       if(n>=playList.length){n=0};
//       audio.src=playList[n].src;
//       audio.play();
//   }
  

function createTrackList () {
  let liArr = [];
  for(let i = 0; i < playList.length; i++) {
    const li = document.createElement('li');
    li.textContent = `${playList[i].title}`;
    playlist.append(li);
    li.addEventListener('click', ()=> {      
         isPlayed = true;
         audio.src = playList[i].src;
         controlPlay.classList.toggle('pause');
         audio.play();
         li.classList.toggle('play-item');
         n = i;
    });
    liArr.push(li);
  }
  return arr = liArr
}
window.addEventListener('load', createTrackList)


/*End audio */