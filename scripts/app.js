const form = document.querySelector('.change-location');
// const input = document.querySelector('input');
const details = document.querySelector('.details');
const time = document.querySelector('.time');
const card = document.querySelector('.card')


updateUI = (data) => {

    const {feature1, feature2} = data;

    console.log(feature1, feature2)

    details.innerHTML = `
    <h5 class="my-3">${feature1.EnglishName}</h5>
    <div class="my-3">${feature2.WeatherText}</div>
    <div class="display-4 my-4">
        <span>${feature2.Temperature.Metric.Value}</span>
        <span>&deg; C</span>
    </div> 
    `

    const imgSrc = feature2.IsDayTime ? 'img/day.svg' : 'img/night.svg';
    time.setAttribute('src', imgSrc)

    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none')
    }
}







updateCity = async (city) => {
    const getCityInfo = await getCity(city);
    const getWeatherInfo = await getWeather(getCityInfo.Key);
    return {
        feature1: getCityInfo,
        feature2: getWeatherInfo
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const city = form.city.value.trim();
    form.reset();

    updateCity(city)
        .then(data => updateUI(data))
        .catch(err => console.log(err))
})


    