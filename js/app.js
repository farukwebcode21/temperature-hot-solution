const API_KEY = `32c4a3d6c9a753d7a754f99266fab00e`;

const searchTemperature =()=>{
    const city = document.getElementById('city-name').value;
    
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemparater(data));
}
// searchTemperature();
const setInnerText =(id, text)=>{
    document.getElementById(id).innerText = text;
}
const displayTemparater = temperature =>{
    
    setInnerText('city', temperature.name);
    setInnerText('temp', temperature.main.temp);
    setInnerText('condition',temperature.weather[0].main);
    // set Weather icon
    const url =`http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);

}