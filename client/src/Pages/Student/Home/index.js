import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import styles from './Home.module.scss';

function Home() {
    const handleJoin = () => {
        alert('Tham gia thành công!');
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.searchBar}>
                <input className={styles.searchInput} placeholder="Tìm lớp học" />
                <FontAwesomeIcon className={styles.searchIcon} icon={faSearch} />
            </div>

            <h3 className={styles.title}>Danh sách lớp học có sẵn</h3>

            <div className={styles.classList}>
                <div className={styles.classItem}>
                    <div className={styles.name}>Lý thuyết đồ thị</div>
                    <div className={styles.teacher}>GV: Mã Trường Thành</div>
                    <button onClick={handleJoin} className={styles.joinBtn}>
                        Tham gia
                    </button>
                </div>
                <div className={styles.classItem}>
                    <div className={styles.name}>Lập trình hướng đối tượng</div>
                    <div className={styles.teacher}>GV: Phan Thượng Cang</div>
                    <button onClick={handleJoin} className={styles.joinBtn}>
                        Tham gia
                    </button>
                </div>
                <div className={styles.classItem}>
                    <div className={styles.name}>Cấu trúc dữ liệu</div>
                    <div className={styles.teacher}>GV: Trương Minh Thái</div>
                    <button onClick={handleJoin} className={styles.joinBtn}>
                        Tham gia
                    </button>
                </div>
                <div className={styles.classItem}>
                    <div className={styles.name}>Nhập môn trí tuệ nhân tạo</div>
                    <div className={styles.teacher}>GV: Huỳnh Ngọc Thái Anh</div>
                    <button onClick={handleJoin} className={styles.joinBtn}>
                        Tham gia
                    </button>
                </div>
                <div className={styles.classItem}>
                    <div className={styles.name}>Lập trình căn bản A</div>
                    <div className={styles.teacher}>GV: Lê Thị Diễm</div>
                    <button onClick={handleJoin} className={styles.joinBtn}>
                        Tham gia
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;
