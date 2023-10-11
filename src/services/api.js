import axios from 'axios';

const API_KEY = 'c337ccd55ef9cc06929ecbc2390a4d09';
const API_URL = 'http://api.openweathermap.org/data/2.5/weather';

const Weather = async (city, country) => {
    try {
        let response = await axios.get(`${API_URL}?q=${city},${country}&appid=${API_KEY}&units=metric`);
        return response.data;
    } catch (error) {
        console.log('Error while calling the api ', error.message);
        return error.response;
    }
}

export default Weather;