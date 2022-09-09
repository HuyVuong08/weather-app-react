import PropTypes from 'prop-types';
import React from 'react';

import styles from './UpcomingDaysForecastItem.module.css';

const UpcomingDaysForecastItem = ({ imgUrl, temperature, weekday }) => (
    <li className={`${styles.weekday} d-flex flex-column justify-content-center align-items-center p-2`}>
        <img width="30" src={imgUrl} alt="" />
        <p className="font-weight-bold">{weekday}</p>
        <p className="mb-2">{temperature}°</p>
    </li>
);

UpcomingDaysForecastItem.propTypes = {
    imgUrl: PropTypes.string.isRequired,
    temperature: PropTypes.number.isRequired,
    weekday: PropTypes.string.isRequired,
};
export default UpcomingDaysForecastItem;
