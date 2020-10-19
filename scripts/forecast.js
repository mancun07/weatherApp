const key = 'dGd4rEiqwfaUUsyWCj29QIVBXP6r7hAP';


const getCity = async (city) => {
    const base = `http://dataservice.accuweather.com/locations/v1/cities/search`;
    const query = `?apikey=${key}&q=${city}`;
    const response = await fetch(base + query);
    const data = await response.json();
    return data[0]
}

const getWeather = async (id) => {
    const base = `http://dataservice.accuweather.com/currentconditions/v1/${id}`;
    const query = `?apikey=${key}`;
    const response = await fetch (base + query);
    const data = await response.json();
    return data[0]
}

// getCity('Moscow')
//     .then(data => getWeather(data))
//     .then(response => console.log(response))
//     .catch(err => console.log(err))
   