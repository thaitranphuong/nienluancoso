import { useState, useEffect } from 'react';
import styles from './Timer.module.scss';

function Timer({ timeTest }) {
    const [time, setTime] = useState(timeTest * 60);

    useEffect(() => {
        setTimeout(() => {
            setTime(time - 1);
        }, 1000);

        if (time < 0) {
            //setPage('endquiz')
        }
    }, [time]);

    return (
        <div className={styles.wrapper}>
            0{Math.floor(time / 3600)} : {Math.floor(Math.floor(time % 3600) / 60)} : {time % 60}
        </div>
    );
}

export default Timer;
