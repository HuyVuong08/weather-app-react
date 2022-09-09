import moment from 'moment';

const getWeekday = date => moment(date).format('dddd').substring(0, 3);

const getUpcomingDaysForecast = data =>
    data
        .filter((_, index) => index % 8 === 0)
        .map(day => ({
            imgUrl: `http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`,
            temperature: Math.round(day.main.temp),
            weekday: getWeekday(day.dt_txt),
        }));

export default getUpcomingDaysForecast;
