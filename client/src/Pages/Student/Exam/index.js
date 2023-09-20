import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faQuestionCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import styles from './Exam.module.scss';
import QuitButton from '../../../components/QuitButton';

function Exam() {
    const [modal, setModal] = useState(false);

    const handleOpenModal = () => {
        setModal(true);
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapperInner}>
                <QuitButton path={'/student/classroom'} />
                <div className={styles.examName}>Kiểm tra 15 phút</div>
                <div className={styles.title}>Lịch sử làm bài</div>
                <div className={styles.historyList}>
                    <Link to="/student/test/history" className={styles.historyItem}>
                        <div className={styles.left}>
                            <div className={styles.number}>1</div>
                            <div className={styles.time}>13/09/2023</div>
                        </div>
                        <div className={styles.right}>
                            <div className={styles.text}>Điểm: </div>
                            <div className={styles.score}>5</div>
                        </div>
                    </Link>
                    <Link to="/student/test/history" className={styles.historyItem}>
                        <div className={styles.left}>
                            <div className={styles.number}>2</div>
                            <div className={styles.time}>13/09/2023</div>
                        </div>
                        <div className={styles.right}>
                            <div className={styles.text}>Điểm: </div>
                            <div className={styles.score}>9</div>
                        </div>
                    </Link>
                </div>
                <button onClick={handleOpenModal} className={styles.startBtn}>
                    Bắt đầu thi
                </button>
            </div>
            {modal && (
                <div className={styles.modal}>
                    <div className={styles.modalWrapper}>
                        <FontAwesomeIcon onClick={() => setModal(false)} className={styles.iconClose} icon={faTimes} />
                        <div className={styles.titleExam}>Kiểm tra 15 phút</div>
                        <div className={styles.info}>
                            <div className={styles.infoLeft}>
                                <FontAwesomeIcon className={styles.infoIcon} icon={faClock} />
                                Thời gian làm bài
                            </div>
                            <div className={styles.infoRight}>40 phút</div>
                        </div>
                        <div className={styles.info}>
                            <div className={styles.infoLeft}>
                                <FontAwesomeIcon className={styles.infoIcon} icon={faQuestionCircle} />
                                Số lượng câu hỏi
                            </div>
                            <div className={styles.infoRight}>20</div>
                        </div>

                        <Link to="/student/test/take-test" className={styles.btnStart}>
                            Bắt đầu thi
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Exam;
