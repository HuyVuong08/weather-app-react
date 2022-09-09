import PropTypes from 'prop-types';
import React from 'react';

import styles from './UpcomingDaysForecast.module.css';
import UpcomingDaysForecastItem from '../UpcomingDaysForecastItem';

const UpcomingDaysForecast = ({ days }) => (
    <ul className={`${styles.weekList} d-flex justify-content-between p-0`}>
        {days.map(day => (
            <UpcomingDaysForecastItem key={day.weekday} {...day} />
        ))}
    </ul>
);

UpcomingDaysForecast.propTypes = {
    days: PropTypes.array.isRequired,
};

export default UpcomingDaysForecast;
