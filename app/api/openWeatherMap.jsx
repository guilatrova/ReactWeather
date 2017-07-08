import axios from 'axios';

//const OPEN_WEATHER_MAP_URL = 'http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=';
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather';
const API_KEY = '2fab0b5bf640582490387feef25996c4';
const UNITS = 'imperial';

const getUrl = (location) => {
    return `${OPEN_WEATHER_MAP_URL}?q=${location}&appid=${API_KEY}&units=${UNITS}`;
}

const getTemp = (location) => {
    const encodedLocation = encodeURIComponent(location);
    const url = getUrl(encodedLocation);

    return axios.get(url).then(res => {
        if (res.data.cod && res.data.message) {
            throw new Error(res.data.message);
        }
        else {
            return res.data.main.temp;
        }
    })
    .catch(res => {
        throw new Error(res.data.message);
    });
}

export default getTemp;