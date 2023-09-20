import { Link } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiAccountSchoolOutline, mdiLogout } from '@mdi/js';

import styles from './JoinClass.module.scss';

function JoinClass() {
    const handleQuitClass = () => {
        const confirm = window.confirm('Bạn có muốn thoát?');
    };

    return (
        <>
            <div className={styles.wrapper}>
                <h3 className={styles.title}>Lớp học đã tham gia</h3>
                <div className={styles.classList}>
                    <div className={styles.classItemWrapper}>
                        <Link to="/student/classroom" className={styles.classItem}>
                            <Icon className={styles.classIcon} path={mdiAccountSchoolOutline} size={3} />
                            <div className={styles.classInfo}>
                                <div className={styles.name}>Nhập môn lập trình web</div>
                                <div className={styles.teacher}>GV: Nguyễn Đức Khoa</div>
                            </div>
                        </Link>
                        <div onClick={handleQuitClass} className={styles.classItemRight}>
                            <Icon className={styles.iconQuit} path={mdiLogout} size={1.2} />
                            Rời khỏi
                        </div>
                    </div>
                    <div className={styles.classItemWrapper}>
                        <Link to="/student/classroom" className={styles.classItem}>
                            <Icon className={styles.classIcon} path={mdiAccountSchoolOutline} size={3} />
                            <div className={styles.classInfo}>
                                <div className={styles.name}>Xây dựng ứng dụng web với Java</div>
                                <div className={styles.teacher}>GV: Vũ Duy Linh</div>
                            </div>
                        </Link>
                        <div onClick={handleQuitClass} className={styles.classItemRight}>
                            <Icon className={styles.iconQuit} path={mdiLogout} size={1.2} />
                            Rời khỏi
                        </div>
                    </div>
                    <div className={styles.classItemWrapper}>
                        <Link to="/student/classroom" className={styles.classItem}>
                            <Icon className={styles.classIcon} path={mdiAccountSchoolOutline} size={3} />
                            <div className={styles.classInfo}>
                                <div className={styles.name}>Ngôn ngữ mô hình hóa</div>
                                <div className={styles.teacher}>GV: Nguyễn Minh Khiêm</div>
                            </div>
                        </Link>
                        <div onClick={handleQuitClass} className={styles.classItemRight}>
                            <Icon className={styles.iconQuit} path={mdiLogout} size={1.2} />
                            Rời khỏi
                        </div>
                    </div>
                    <div className={styles.classItemWrapper}>
                        <Link to="/student/classroom" className={styles.classItem}>
                            <Icon className={styles.classIcon} path={mdiAccountSchoolOutline} size={3} />
                            <div className={styles.classInfo}>
                                <div className={styles.name}>Xây dựng ứng dụng web với .NET</div>
                                <div className={styles.teacher}>GV: Lê Văn Quan</div>
                            </div>
                        </Link>
                        <div onClick={handleQuitClass} className={styles.classItemRight}>
                            <Icon className={styles.iconQuit} path={mdiLogout} size={1.2} />
                            Rời khỏi
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default JoinClass;
