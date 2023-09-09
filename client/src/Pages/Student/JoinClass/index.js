import { Link, Route, Routes } from 'react-router-dom';

import styles from './JoinClass.module.scss';

function JoinClass() {
    return (
        <>
            <div className={styles.wrapper}>
                <h3 className={styles.title}>Lớp học đã tham gia</h3>
                <div className={styles.classList}>
                    <Link to="/student/classroom" className={styles.classItem}>
                        <div className={styles.name}>Tên lớp học</div>
                        <div className={styles.teacher}>Tên giáo viên</div>
                    </Link>
                    <Link to="/student/classroom" className={styles.classItem}>
                        <div className={styles.name}>Tên lớp học</div>
                        <div className={styles.teacher}>Tên giáo viên</div>
                    </Link>
                    <Link to="/student/classroom" className={styles.classItem}>
                        <div className={styles.name}>Tên lớp học</div>
                        <div className={styles.teacher}>Tên giáo viên</div>
                    </Link>
                    <Link to="/student/classroom" className={styles.classItem}>
                        <div className={styles.name}>Tên lớp học</div>
                        <div className={styles.teacher}>Tên giáo viên</div>
                    </Link>
                    <Link to="/student/classroom" className={styles.classItem}>
                        <div className={styles.name}>Tên lớp học</div>
                        <div className={styles.teacher}>Tên giáo viên</div>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default JoinClass;
