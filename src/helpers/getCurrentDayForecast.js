import moment from 'moment';

const getCurrentDayForecast = (data, title) => ({
    weekday: moment(data.dt_txt).format('dddd'),
    date: moment(data.dt_txt).format('MMMM Do'),
    location: title,
    temperature: Math.round(data.main.temp),
    weatherIcon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
    weatherDescription: data.weather[0].description,
});

export default getCurrentDayForecast;
