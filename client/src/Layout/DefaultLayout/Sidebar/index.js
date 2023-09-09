import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { useState } from 'react';
import {
    faBook,
    faBookOpen,
    faBuilding,
    faFileLines,
    faHouse,
    faStamp,
    faUser,
    faUserCheck,
    faUserCircle,
} from '@fortawesome/free-solid-svg-icons';

import styles from './Sidebar.module.scss';
import logo from '../../../assets/images/logo.png';

function Sidebar() {
    const [active, setActive] = useState('home');

    return (
        <>
            <div className={styles.wrapper}>
                <img src={logo} alt="logo" className={styles.logo} />
                <div className={styles.wrapperBtn}>
                    <div className={styles.wrapperBlockBtn}>
                        <Link
                            onClick={() => setActive('home')}
                            to="/student/home"
                            className={clsx(styles.btn, { [styles.active]: active === 'home' })}
                        >
                            <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>
                            <div className={styles.tooltip}>Trang chủ</div>
                        </Link>
                        <div className={clsx({ [styles.blockTop]: active === 'home' })}></div>
                        <div className={clsx({ [styles.blockCenter]: active === 'home' })}></div>
                        <div className={clsx({ [styles.blockBottom]: active === 'home' })}></div>
                    </div>
                    <div className={styles.wrapperBlockBtn}>
                        <Link
                            onClick={() => setActive('joinclass')}
                            to="/student/joinclass"
                            className={clsx(styles.btn, { [styles.active]: active === 'joinclass' })}
                        >
                            <FontAwesomeIcon icon={faBookOpen}></FontAwesomeIcon>
                            <div className={styles.tooltip}>Lớp học</div>
                        </Link>
                        <div className={clsx({ [styles.blockTop]: active === 'joinclass' })}></div>
                        <div className={clsx({ [styles.blockCenter]: active === 'joinclass' })}></div>
                        <div className={clsx({ [styles.blockBottom]: active === 'joinclass' })}></div>
                    </div>
                    <div className={styles.wrapperBlockBtn}>
                        <Link
                            onClick={() => setActive('account')}
                            to="/student/account"
                            className={clsx(styles.btn, { [styles.active]: active === 'account' })}
                        >
                            <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                            <div className={styles.tooltip}>Tài khoản</div>
                        </Link>
                        <div className={clsx({ [styles.blockTop]: active === 'account' })}></div>
                        <div className={clsx({ [styles.blockCenter]: active === 'account' })}></div>
                        <div className={clsx({ [styles.blockBottom]: active === 'account' })}></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sidebar;
