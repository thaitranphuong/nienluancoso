import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faClock, faFileSignature, faQuestionCircle, faTimes } from '@fortawesome/free-solid-svg-icons';

import styles from './Classroom.module.scss';

function Classroom() {
    const [modal, setModal] = useState(false);

    const handleOpenModal = () => {
        setModal(true);
    };

    return (
        <div className={styles.wrapper}>
            <h3 className={styles.title}>Danh sách bài thi</h3>
            <Link to="/student/joinclass" className={styles.goBack}>
                <FontAwesomeIcon className={styles.iconBack} icon={faAngleLeft} />
                Quay lại
            </Link>
            <div className={styles.examList}>
                <div onClick={() => handleOpenModal()} className={styles.examItem}>
                    <FontAwesomeIcon className={styles.iconExam} icon={faFileSignature} />
                    Tên bài thi
                </div>
                <div onClick={() => handleOpenModal()} className={styles.examItem}>
                    <FontAwesomeIcon className={styles.iconExam} icon={faFileSignature} />
                    Tên bài thi
                </div>
                <div onClick={() => handleOpenModal()} className={styles.examItem}>
                    <FontAwesomeIcon className={styles.iconExam} icon={faFileSignature} />
                    Tên bài thi
                </div>
                <div onClick={() => handleOpenModal()} className={styles.examItem}>
                    <FontAwesomeIcon className={styles.iconExam} icon={faFileSignature} />
                    Tên bài thi
                </div>
                <div onClick={() => handleOpenModal()} className={styles.examItem}>
                    <FontAwesomeIcon className={styles.iconExam} icon={faFileSignature} />
                    Tên bài thi
                </div>
            </div>

            {modal && (
                <div className={styles.modal}>
                    <div className={styles.modalWrapper}>
                        <FontAwesomeIcon onClick={() => setModal(false)} className={styles.iconClose} icon={faTimes} />
                        <div className={styles.titleExam}>Tên bài thi</div>
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

                        <button className={styles.btnStart}>Bắt đầu thi</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Classroom;
