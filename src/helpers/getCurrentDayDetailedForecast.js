const getCurrentDayDetailedForecast = data => [
    {
        name: 'temperature',
        value: Math.round(data.main.temp),
        unit: '°C',
    },
    {
        name: 'feels like',
        value: Math.round(data.main.feels_like),
        unit: '°C',
    },
    {
        name: 'cloudiness',
        value: data.clouds.all,
        unit: '%',
    },
    {
        name: 'humidity',
        value: data.main.humidity,
        unit: '%',
    },
    {
        name: 'wind speed',
        value: Math.round(data.wind.speed),
        unit: 'm/s',
    },
    {
        name: 'wind gust',
        value: data.wind.gust,
        unit: 'm/s',
    },
];

export default getCurrentDayDetailedForecast;
