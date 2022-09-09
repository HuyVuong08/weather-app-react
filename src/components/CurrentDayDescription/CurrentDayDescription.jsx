import PropTypes from 'prop-types';
import React from 'react';
import CurrentDayDescriptionItem from '../CurrentDayDescriptionItem';

const CurrentDayDescription = ({ forecast }) => (
    <div className="mt-4 mt-md-2">
        <div className="d-flex flex-column mb-2">
            {forecast.map(item => (
                <CurrentDayDescriptionItem key={item.name} {...item} />
            ))}
        </div>
    </div>
);

CurrentDayDescription.propTypes = {
    forecast: PropTypes.array.isRequired,
};

export default CurrentDayDescription;
