import Icon from '@mdi/react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

import { ContextTest } from '../Component/ContextProviderTest';
import styles from './EndTest.module.scss';
import {
    mdiAccountOutline,
    mdiCheckCircleOutline,
    mdiClockTimeThreeOutline,
    mdiCloseCircleOutline,
    mdiHelpCircleOutline,
    mdiMenuRight,
} from '@mdi/js';

function EndTest() {
    //const { a } = useContext(ContextTest);
    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapperInner}>
                <div className={styles.head}>
                    <div className={styles.message}>Bài làm của bạn đã được gửi đi</div>
                    <div className={styles.yourScore}>
                        <div className={styles.text}>Điểm của bạn: </div>
                        <div className={styles.score}>4/10</div>
                    </div>
                </div>
                <div className={styles.body}>
                    <div className={styles.nameExam}>Tên bài thi</div>
                    <div className={styles.infoList}>
                        <div className={styles.infoItem}>
                            <div className={styles.infoLeft}>
                                <Icon className={styles.iconName} path={mdiAccountOutline} size={1} />
                                <div className={styles.text}>Thí sinh</div>
                            </div>
                            <div className={styles.infoRight}>
                                <div className={styles.name}>Tran Thai</div>
                            </div>
                        </div>
                        <div className={styles.infoItem}>
                            <div className={styles.infoLeft}>
                                <Icon className={styles.iconTime} path={mdiClockTimeThreeOutline} size={1} />
                                <div className={styles.text}>Ngày làm bài</div>
                            </div>
                            <div className={styles.infoRight}>
                                <div className={styles.time}>10/11/2022</div>
                            </div>
                        </div>
                        <div className={styles.infoItem}>
                            <div className={styles.infoLeft}>
                                <Icon className={styles.iconTrue} path={mdiCheckCircleOutline} size={1} />
                                <div className={styles.text}>Số câu trắc nghiệm đúng</div>
                            </div>
                            <div className={styles.infoRight}>
                                <div className={styles.numberTrue}>4</div>
                            </div>
                        </div>
                        <div className={styles.infoItem}>
                            <div className={styles.infoLeft}>
                                <Icon className={styles.iconFalse} path={mdiCloseCircleOutline} size={1} />
                                <div className={styles.text}>Số câu trắc nghiệm sai</div>
                            </div>
                            <div className={styles.infoRight}>
                                <div className={styles.numberFalse}>10</div>
                            </div>
                        </div>
                        <div className={styles.infoItem}>
                            <div className={styles.infoLeft}>
                                <Icon className={styles.iconTotal} path={mdiHelpCircleOutline} size={1} />
                                <div className={styles.text}>Tổng số câu hỏi trong đề</div>
                            </div>
                            <div className={styles.infoRight}>
                                <div className={styles.total}>40</div>
                            </div>
                        </div>
                    </div>
                    <Link to="/student/test/history" className={styles.returnBtn}>
                        Xem đáp án
                        <Icon path={mdiMenuRight} size={1.5} />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default EndTest;
