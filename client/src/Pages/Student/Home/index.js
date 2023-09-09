import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import styles from './Home.module.scss';

function Home() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.searchBar}>
                <input className={styles.searchInput} placeholder="Tìm lớp học" />
                <FontAwesomeIcon className={styles.searchIcon} icon={faSearch} />
            </div>

            <h3 className={styles.title}>Danh sách lớp học có sẵn</h3>

            <div className={styles.classList}>
                <div className={styles.classItem}>
                    <div className={styles.name}>Tên lớp học</div>
                    <div className={styles.teacher}>Tên giáo viên</div>
                </div>
                <div className={styles.classItem}>
                    <div className={styles.name}>Tên lớp học</div>
                    <div className={styles.teacher}>Tên giáo viên</div>
                </div>
                <div className={styles.classItem}>
                    <div className={styles.name}>Tên lớp học</div>
                    <div className={styles.teacher}>Tên giáo viên</div>
                </div>
                <div className={styles.classItem}>
                    <div className={styles.name}>Tên lớp học</div>
                    <div className={styles.teacher}>Tên giáo viên</div>
                </div>
                <div className={styles.classItem}>
                    <div className={styles.name}>Tên lớp học</div>
                    <div className={styles.teacher}>Tên giáo viên</div>
                </div>
            </div>
        </div>
    );
}

export default Home;
