import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import Icon from '@mdi/react';
import { mdiAccountOutline, mdiBellOutline, mdiRotate3dVariant } from '@mdi/js';
import { useState } from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD

=======
>>>>>>> bd7b51679267eed8194a715d21a79e652c27b18e
import styles from './Header.module.scss';
import avatar from '../../../assets/images/avatar.png';
import flag from '../../../assets/images/vi.svg';

function Header() {
    const [windows, setWindow] = useState(false);

    const handleRefresh = () => {
        window.location.pathname = '/student/home';
    };

    return (
        <div className={styles.wrapper}>
<<<<<<< HEAD
            <img className={styles.flagIcon} src={flag} alt="flag" />
=======
>>>>>>> bd7b51679267eed8194a715d21a79e652c27b18e
            <Icon path={mdiBellOutline} size={1.4} className={styles.bellIcon} />
            <div className={styles.avatarWrapper}>
                <img onClick={() => setWindow(!windows)} className={styles.avatar} src={avatar} alt="avatar"></img>

                {windows && (
                    <>
                        <div className={styles.aroundWindow} onClick={() => setWindow(false)}></div>
                        <div className={styles.accountWindow}>
                            <header className={styles.headerWindow}>
                                <div className={styles.username}>Thai Tran</div>
                                <div className={styles.role}>Học sinh</div>
                            </header>
                            <div className={styles.bodyWindow}>
                                <div className={styles.wrapperItem}>
                                    <Link
                                        onClick={() => setWindow(!windows)}
<<<<<<< HEAD
                                        to="/auth/account"
=======
                                        to="/student/account"
>>>>>>> bd7b51679267eed8194a715d21a79e652c27b18e
                                        className={styles.bodyItem}
                                    >
                                        <Icon className={styles.bodyIcon} path={mdiAccountOutline} size={1} />
                                        Tài khoản
                                    </Link>
                                </div>
                                <div onClick={handleRefresh} className={styles.wrapperItem}>
                                    <div className={styles.bodyItem}>
                                        <Icon className={styles.bodyIcon} path={mdiRotate3dVariant} size={1} />
                                        Refresh
                                    </div>
                                </div>
                            </div>
                            <footer className={styles.fotterWindow}>
                                <div onClick={() => setWindow(!window)} className={styles.wrapperItem}>
                                    <FontAwesomeIcon className={styles.logoutIcon} icon={faArrowRightFromBracket} />
                                    Đăng xuất
                                </div>
                            </footer>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Header;
