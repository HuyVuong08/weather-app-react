import axios from 'axios';
import { useState } from 'react';
import getCurrentDayDetailedForecast from '../helpers/getCurrentDayDetailedForecast';
import getCurrentDayForecast from '../helpers/getCurrentDayForecast';
import getUpcomingDaysForecast from '../helpers/getUpcomingDaysForecast';

const useForecast = () => {
    const BASE_URL = 'http://api.openweathermap.org/';
    const CROSS_DOMAIN = 'https://the-ultimate-api-challenge.herokuapp.com';
    const REQUEST_URL = `${CROSS_DOMAIN}/${BASE_URL}`;
    const API_KEY = '85dbbe2b9cff4e8b40524cdb7ec8884b';

    const [isError, setError] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [forecast, setForecast] = useState('');

    const getWoeid = async location => {
        const { data } = await axios(`${REQUEST_URL}geo/1.0/direct`, { params: { q: location, appid: API_KEY } });
        if (!data || data.length === 0) {
            setError('There is no such location');
            setLoading(false);
            return;
        }
        return data[0];
    };

    const getForecastData = async woeid => {
        const { data } = await axios(`${REQUEST_URL}data/2.5/forecast`, {
            params: { lat: woeid.lat, lon: woeid.lon, units: 'metric', appid: API_KEY },
        });
        if (!data || data.length === 0) {
            setError('Something went wrong');
            setLoading(false);
            return;
        }
        return data;
    };

    const gatherForecastData = data => {
        const currentDay = getCurrentDayForecast(data.list[0], data.city.name);
        const upcomingDays = getUpcomingDaysForecast(data.list);
        const currentDayDetails = getCurrentDayDetailedForecast(data.list[0]);
        setForecast({ currentDay, upcomingDays, currentDayDetails });
        setLoading(false);
    };

    const submitRequest = async location => {
        setLoading(true);
        setError('');
        const response = await getWoeid(location);
        if (!response?.lat || !response?.lon) return;
        const data = await getForecastData({ lat: response.lat.toFixed(2), lon: response.lon.toFixed(2) });
        if (!data) return;
        gatherForecastData(data);
    };

    return { isError, isLoading, forecast, submitRequest };
};

export default useForecast;
