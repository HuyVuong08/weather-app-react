import { Fragment } from 'react';

import useForecast from '../../hooks/useForecast';
import Error from '../Error';
import Forecast from '../Forecast';
import Form from '../Form';
import Header from '../Header';
import Loader from '../Loader';
import styles from './Page.module.css';

const Page = () => {
    const { isError, isLoading, forecast, submitRequest } = useForecast();

    const onSumit = value => {
        submitRequest(value);
    };

    return (
        <Fragment>
            <Header />
            {!forecast && (
                <div className={`${styles.box} position-relative`}>
                    <Form submitSearch={onSumit} isLoading={isLoading} />
                    {isError && <Error message={isError} />}
                    {isLoading && <Loader />}
                </div>
            )}
            {forecast && <Forecast forecast={forecast} />}
        </Fragment>
    );
};

export default Page;
