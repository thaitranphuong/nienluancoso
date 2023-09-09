import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket, faDoorClosed, faDoorOpen, faMicroscope } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import avatar from '../../../assets/images/avatar.png';

function Header() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.avatarWrapper}>
                <img className={styles.avatar} src={avatar} alt="avatar"></img>
                <div className={styles.logoutWrapper}>
                    <FontAwesomeIcon className={styles.avatarIcon} icon={faArrowRightFromBracket} />
                    <div>Đăng xuất</div>
                </div>
            </div>
        </div>
    );
}

export default Header;
