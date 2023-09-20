import { useContext, useState, useEffect } from 'react';
import Icon from '@mdi/react';
import { mdiClockOutline, mdiFileCheckOutline, mdiFileEditOutline, mdiPowerStandby } from '@mdi/js';
import clsx from 'clsx';

import { ContextTest } from '../Component/ContextProviderTest';
import styles from './TakeTest.module.scss';

function TakeTest() {
    const [modal, setModal] = useState(false);
    const [time, setTime] = useState(3000);

    useEffect(() => {
        setTimeout(() => {
            setTime(time - 1);
        }, 1000);

        if (time < 0) {
        }
    }, [time]);

    return (
        <div className={styles.wrapper}>
            <header className={styles.header}>
                <button onClick={() => setModal(true)} className={styles.left}>
                    <Icon className={styles.iconLeft} path={mdiPowerStandby} size={1.1} />
                    Thoát
                </button>
                <div className={styles.mid}>Thí sinh: Tran Thai</div>
                <div className={styles.right}>
                    <div className={styles.time}>
                        <Icon className={styles.timeIcon} path={mdiClockOutline} size={1.3} />
                        <>
                            0{Math.floor(time / 3600)} : {Math.floor(time / 60)} : {time % 60}
                        </>
                    </div>
                    <button onClick={() => setModal(true)} className={styles.btnSubmit}>
                        <Icon className={styles.iconSubmit} path={mdiFileEditOutline} size={1} />
                        Nộp bài
                    </button>
                </div>
            </header>
            <nav className={styles.sidebar}>
                <div className={styles.title}>Danh sách câu hỏi</div>
                <div className={styles.orderList}>
                    <button className={clsx(styles.orderItem, styles.active)}>01</button>
                    <button className={clsx(styles.orderItem)}>02</button>
                    <button className={clsx(styles.orderItem)}>03</button>
                    <button className={clsx(styles.orderItem)}>04</button>
                    <button className={clsx(styles.orderItem)}>05</button>
                    <button className={clsx(styles.orderItem)}>06</button>
                    <button className={clsx(styles.orderItem)}>07</button>
                    <button className={clsx(styles.orderItem)}>08</button>
                    <button className={clsx(styles.orderItem)}>09</button>
                </div>
            </nav>
            <body className={styles.body}>
                <div className={styles.question}>
                    <div className={styles.bodyQuestion}>
                        <div className={styles.title}>Câu 1</div>
                        <div className={styles.content}>
                            ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd
                            ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd
                            ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd
                        </div>
                        <div className={styles.answerList}>
                            <div className={styles.answerItem}>
                                <strong className={styles.label}>A. </strong>x = 3
                            </div>
                            <div className={styles.answerItem}>
                                <strong className={styles.label}>B. </strong>x = 4
                            </div>
                            <div className={styles.answerItem}>
                                <strong className={styles.label}>C. </strong>x = 5
                            </div>
                            <div className={styles.answerItem}>
                                <strong className={styles.label}>D. </strong>x = 6
                            </div>
                        </div>
                    </div>
                    <div className={styles.footer}>
                        Đáp án của bạn:
                        <div className={styles.optionList}>
                            <button className={clsx(styles.optionItem, styles.active)}>A</button>
                            <button className={clsx(styles.optionItem)}>B</button>
                            <button className={clsx(styles.optionItem)}>C</button>
                            <button className={clsx(styles.optionItem)}>D</button>
                        </div>
                    </div>
                </div>
                <div className={styles.question}>
                    <div className={styles.bodyQuestion}>
                        <div className={styles.title}>Câu 2</div>
                        <div className={styles.content}>
                            ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd
                            ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd
                        </div>
                        <div className={styles.answerList}>
                            <div className={styles.answerItem}>
                                <strong className={styles.label}>A. </strong>x = 3
                            </div>
                            <div className={styles.answerItem}>
                                <strong className={styles.label}>B. </strong>x = 4
                            </div>
                            <div className={styles.answerItem}>
                                <strong className={styles.label}>C. </strong>x = 5
                            </div>
                            <div className={styles.answerItem}>
                                <strong className={styles.label}>D. </strong>x = 6
                            </div>
                        </div>
                    </div>
                    <div className={styles.footer}>
                        Đáp án của bạn:
                        <div className={styles.optionList}>
                            <button className={clsx(styles.optionItem)}>A</button>
                            <button className={clsx(styles.optionItem, styles.active)}>B</button>
                            <button className={clsx(styles.optionItem)}>C</button>
                            <button className={clsx(styles.optionItem)}>D</button>
                        </div>
                    </div>
                </div>
                <div className={styles.question}>
                    <div className={styles.bodyQuestion}>
                        <div className={styles.title}>Câu 3</div>
                        <div className={styles.content}>
                            ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd
                            ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd
                        </div>
                        <div className={styles.answerList}>
                            <div className={styles.answerItem}>
                                <strong className={styles.label}>A. </strong>x = 3
                            </div>
                            <div className={styles.answerItem}>
                                <strong className={styles.label}>B. </strong>x = 4
                            </div>
                            <div className={styles.answerItem}>
                                <strong className={styles.label}>C. </strong>x = 5
                            </div>
                            <div className={styles.answerItem}>
                                <strong className={styles.label}>D. </strong>x = 6
                            </div>
                        </div>
                    </div>
                    <div className={styles.footer}>
                        Đáp án của bạn:
                        <div className={styles.optionList}>
                            <button className={clsx(styles.optionItem, styles.active)}>A</button>
                            <button className={clsx(styles.optionItem)}>B</button>
                            <button className={clsx(styles.optionItem)}>C</button>
                            <button className={clsx(styles.optionItem)}>D</button>
                        </div>
                    </div>
                </div>
                <div className={styles.question}>
                    <div className={styles.bodyQuestion}>
                        <div className={styles.title}>Câu 4</div>
                        <div className={styles.content}>
                            ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd
                            ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd
                            ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd
                        </div>
                        <div className={styles.answerList}>
                            <div className={styles.answerItem}>
                                <strong className={styles.label}>A. </strong>x = 3
                            </div>
                            <div className={styles.answerItem}>
                                <strong className={styles.label}>B. </strong>x = 4
                            </div>
                            <div className={styles.answerItem}>
                                <strong className={styles.label}>C. </strong>x = 5
                            </div>
                            <div className={styles.answerItem}>
                                <strong className={styles.label}>D. </strong>x = 6
                            </div>
                        </div>
                    </div>
                    <div className={styles.footer}>
                        Đáp án của bạn:
                        <div className={styles.optionList}>
                            <button className={clsx(styles.optionItem, styles.active)}>A</button>
                            <button className={clsx(styles.optionItem)}>B</button>
                            <button className={clsx(styles.optionItem)}>C</button>
                            <button className={clsx(styles.optionItem)}>D</button>
                        </div>
                    </div>
                </div>
            </body>

            {modal && (
                <div className={styles.modal}>
                    <div onClick={() => setModal(false)} className={styles.modalBackground}></div>
                    <div className={styles.modalWrapper}>
                        <div className={styles.modalBody}>
                            <div className={styles.modalBodyTop}>
                                <Icon className={styles.modalBodyTopIcon} path={mdiFileCheckOutline} size={1.5} />
                                Bạn có chắc chắn muốn nộp bài ?
                            </div>
                            <div className={styles.modalBodyMiddle}>
                                Thời gian làm bài của bạn còn{' '}
                                <strong className={styles.modalTime}>
                                    <>
                                        0{Math.floor(time / 3600)} : {Math.floor(time / 60)} : {time % 60}
                                    </>
                                </strong>
                            </div>
                            <div className={styles.modalBodyBottom}>
                                Khi xác nhận nhấn nộp bài, bạn sẽ không thể sửa lại bài thi của mình. Hãy chắc chắn bạn
                                đã xem lại tất cả các đáp án. Chúc bạn may mắn 🍀.
                            </div>
                        </div>
                        <div className={styles.modalFooter}>
                            <button onClick={() => setModal(false)} className={styles.modalCancleBtn}>
                                Hủy
                            </button>
                            <button className={styles.modalSubmitBtn}>Nộp bài</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default TakeTest;
