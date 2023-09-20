import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileSignature } from '@fortawesome/free-solid-svg-icons';

import styles from './Classroom.module.scss';
import QuitButton from '../../../components/QuitButton';

function Classroom() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.head}>
                <h2 className={styles.subject}>Nhập môn lập trình web</h2>
                <span className={styles.teacher}>GV: Nguyễn Đức Khoa</span>
            </div>
            <h3 className={styles.title}>Danh sách bài thi</h3>
            <QuitButton path={'/student/joinclass'} />
            <div className={styles.examList}>
                <Link to="/student/exam" className={styles.examItem}>
                    <FontAwesomeIcon className={styles.iconExam} icon={faFileSignature} />
                    Kiểm tra 15 phút
                </Link>
                <Link to="/student/exam" className={styles.examItem}>
                    <FontAwesomeIcon className={styles.iconExam} icon={faFileSignature} />
                    Thi cuối kỳ I
                </Link>
                <Link to="/student/exam" className={styles.examItem}>
                    <FontAwesomeIcon className={styles.iconExam} icon={faFileSignature} />
                    Kiểm tra 1 tiết
                </Link>
                <Link to="/student/exam" className={styles.examItem}>
                    <FontAwesomeIcon className={styles.iconExam} icon={faFileSignature} />
                    Kiểm tra thử
                </Link>
                <Link to="/student/exam" className={styles.examItem}>
                    <FontAwesomeIcon className={styles.iconExam} icon={faFileSignature} />
                    Ôn tập cuối kỳ I
                </Link>
            </div>
        </div>
    );
}

export default Classroom;
