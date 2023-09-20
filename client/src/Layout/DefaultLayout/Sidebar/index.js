import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { useState } from 'react';
import Icon from '@mdi/react';
<<<<<<< HEAD
import { mdiCogOutline, mdiHomeOutline, mdiFileDocumentOutline } from '@mdi/js';
=======
import { mdiAccountOutline, mdiCogOutline, mdiHomeOutline, mdiFileDocumentOutline } from '@mdi/js';
>>>>>>> bd7b51679267eed8194a715d21a79e652c27b18e
import { useContext } from 'react';

import { ContextProvider } from '../../../components/Povider';
import styles from './Sidebar.module.scss';
import logo from '../../../assets/images/logo.png';

function Sidebar() {
    const [themeBoard, setThemeBoard] = useState(false);

    const [active, setActive] = useState('/student/home');
    const { setTheme } = useContext(ContextProvider);

    return (
        <>
            <div className={styles.wrapper}>
                <img src={logo} alt="logo" className={styles.logo} />
                <div className={styles.wrapperBtn}>
                    <div className={styles.wrapperBlockBtn}>
                        <Link
                            onClick={() => setActive('/student/home')}
                            to="/student/home"
                            className={clsx(styles.btn, { [styles.active]: active === '/student/home' })}
                        >
                            <Icon path={mdiHomeOutline} size={2} />
                            <div className={styles.tooltip}>Trang chủ</div>
                        </Link>
                        <div className={clsx({ [styles.blockTop]: active === '/student/home' })}></div>
                        <div className={clsx({ [styles.blockCenter]: active === '/student/home' })}></div>
                        <div className={clsx({ [styles.blockBottom]: active === '/student/home' })}></div>
                    </div>
                    <div className={styles.wrapperBlockBtn}>
                        <Link
                            onClick={() => setActive('/student/joinclass')}
                            to="/student/joinclass"
                            className={clsx(styles.btn, { [styles.active]: active === '/student/joinclass' })}
                        >
                            <Icon path={mdiFileDocumentOutline} size={2} />
                            <div className={styles.tooltip}>Lớp học</div>
                        </Link>
                        <div className={clsx({ [styles.blockTop]: active === '/student/joinclass' })}></div>
                        <div className={clsx({ [styles.blockCenter]: active === '/student/joinclass' })}></div>
                        <div className={clsx({ [styles.blockBottom]: active === '/student/joinclass' })}></div>
                    </div>

                    <div
                        onClick={() => {
                            setThemeBoard(!themeBoard);
                        }}
                        className={clsx(styles.btnSetting)}
                    >
                        <Icon path={mdiCogOutline} size={2} />
                        {themeBoard && (
                            <div className={styles.themeWrapper}>
                                <div className={styles.themeTitle}>Bảng màu</div>
                                <div onClick={() => setTheme('theme1')} className={styles.themeColor1}></div>
                                <div onClick={() => setTheme('theme2')} className={styles.themeColor2}></div>
                                <div onClick={() => setTheme('theme3')} className={styles.themeColor3}></div>
                                <div onClick={() => setTheme('theme4')} className={styles.themeColor4}></div>
                                <div onClick={() => setTheme('theme5')} className={styles.themeColor5}></div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sidebar;
