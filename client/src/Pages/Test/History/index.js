import clsx from 'clsx';

import QuitButton from '../../../components/QuitButton';
import styles from './History.module.scss';
import Icon from '@mdi/react';
import { mdiCheckCircle, mdiClose } from '@mdi/js';

function History() {
    return (
        <div className={styles.wrapper}>
            <QuitButton path={'/student/exam'} />
            <div className={styles.header}>
                <div className={styles.headerLeft}>Kiểm tra 15 phút</div>
                <div className={styles.headerRight}>Điểm: 4/10</div>
            </div>
            <div className={styles.body}>
                <div className={styles.top}>
                    <button className={styles.btnTitle}>Trắc nghiệm</button>
                </div>
                <div className={styles.listQuestion}>
                    <div className={styles.question}>
                        <div className={styles.bodyQuestion}>
                            <div className={styles.title}>Câu 1</div>
                            <div className={styles.content}>
                                ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd
                                ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd
                                ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd
                                ddd ddd ddd
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
                            <div className={clsx(styles.footerText, { [styles.true]: false })}>Đáp án đúng: C</div>
                            {/* So sách đáp án chọn với từng optionItem, nếu khớp thì hiển thị hai icon, sau
                                đó so sánh đáp án chọ với đáp án đúng, nếu đúng hiển thị trueIcon, ngươc lại hiển thị falseIcon */}
                            <div className={styles.optionList}>
                                <button className={clsx(styles.optionItem)}>
                                    {true && (
                                        <>
                                            {true && <Icon className={styles.falseIcon} path={mdiClose} size={1.5} />}
                                            {!true && (
                                                <Icon className={styles.trueIcon} path={mdiCheckCircle} size={1.5} />
                                            )}
                                        </>
                                    )}
                                    A
                                </button>
                                <button className={clsx(styles.optionItem)}>
                                    {!true && (
                                        <>
                                            {true && <Icon className={styles.falseIcon} path={mdiClose} size={1.5} />}
                                            {!true && (
                                                <Icon className={styles.trueIcon} path={mdiCheckCircle} size={1.5} />
                                            )}
                                        </>
                                    )}
                                    B
                                </button>
                                <button className={clsx(styles.optionItem)}>
                                    {!true && (
                                        <>
                                            {true && <Icon className={styles.falseIcon} path={mdiClose} size={1.5} />}
                                            {!true && (
                                                <Icon className={styles.trueIcon} path={mdiCheckCircle} size={1.5} />
                                            )}
                                        </>
                                    )}
                                    C
                                </button>
                                <button className={clsx(styles.optionItem)}>
                                    {!true && (
                                        <>
                                            {true && <Icon className={styles.falseIcon} path={mdiClose} size={1.5} />}
                                            {!true && (
                                                <Icon className={styles.trueIcon} path={mdiCheckCircle} size={1.5} />
                                            )}
                                        </>
                                    )}
                                    D
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.question}>
                        <div className={styles.bodyQuestion}>
                            <div className={styles.title}>Câu 2</div>
                            <div className={styles.content}>
                                ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd
                                ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd
                                ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd
                                ddd ddd ddd
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
                            <div className={clsx(styles.footerText, { [styles.true]: true })}>Đáp án đúng: A</div>
                            {/* So sách đáp án chọn với từng optionItem, nếu khớp thì hiển thị hai icon, sau
                                đó so sánh đáp án chọ với đáp án đúng, nếu đúng hiển thị trueIcon, ngươc lại hiển thị falseIcon */}
                            <div className={styles.optionList}>
                                <button className={clsx(styles.optionItem)}>
                                    {true && (
                                        <>
                                            {!true && <Icon className={styles.falseIcon} path={mdiClose} size={1.5} />}
                                            {true && (
                                                <Icon className={styles.trueIcon} path={mdiCheckCircle} size={1.5} />
                                            )}
                                        </>
                                    )}
                                    A
                                </button>
                                <button className={clsx(styles.optionItem)}>
                                    {!true && (
                                        <>
                                            {true && <Icon className={styles.falseIcon} path={mdiClose} size={1.5} />}
                                            {!true && (
                                                <Icon className={styles.trueIcon} path={mdiCheckCircle} size={1.5} />
                                            )}
                                        </>
                                    )}
                                    B
                                </button>
                                <button className={clsx(styles.optionItem)}>
                                    {!true && (
                                        <>
                                            {true && <Icon className={styles.falseIcon} path={mdiClose} size={1.5} />}
                                            {!true && (
                                                <Icon className={styles.trueIcon} path={mdiCheckCircle} size={1.5} />
                                            )}
                                        </>
                                    )}
                                    C
                                </button>
                                <button className={clsx(styles.optionItem)}>
                                    {!true && (
                                        <>
                                            {true && <Icon className={styles.falseIcon} path={mdiClose} size={1.5} />}
                                            {!true && (
                                                <Icon className={styles.trueIcon} path={mdiCheckCircle} size={1.5} />
                                            )}
                                        </>
                                    )}
                                    D
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.question}>
                        <div className={styles.bodyQuestion}>
                            <div className={styles.title}>Câu 3</div>
                            <div className={styles.content}>
                                ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd
                                ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd
                                ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd
                                ddd ddd ddd
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
                            <div className={clsx(styles.footerText, { [styles.true]: true })}>Đáp án đúng: A</div>
                            {/* So sách đáp án chọn với từng optionItem, nếu khớp thì hiển thị hai icon, sau
                                đó so sánh đáp án chọ với đáp án đúng, nếu đúng hiển thị trueIcon, ngươc lại hiển thị falseIcon */}
                            <div className={styles.optionList}>
                                <button className={clsx(styles.optionItem)}>
                                    {true && (
                                        <>
                                            {!true && <Icon className={styles.falseIcon} path={mdiClose} size={1.5} />}
                                            {true && (
                                                <Icon className={styles.trueIcon} path={mdiCheckCircle} size={1.5} />
                                            )}
                                        </>
                                    )}
                                    A
                                </button>
                                <button className={clsx(styles.optionItem)}>
                                    {!true && (
                                        <>
                                            {true && <Icon className={styles.falseIcon} path={mdiClose} size={1.5} />}
                                            {!true && (
                                                <Icon className={styles.trueIcon} path={mdiCheckCircle} size={1.5} />
                                            )}
                                        </>
                                    )}
                                    B
                                </button>
                                <button className={clsx(styles.optionItem)}>
                                    {!true && (
                                        <>
                                            {true && <Icon className={styles.falseIcon} path={mdiClose} size={1.5} />}
                                            {!true && (
                                                <Icon className={styles.trueIcon} path={mdiCheckCircle} size={1.5} />
                                            )}
                                        </>
                                    )}
                                    C
                                </button>
                                <button className={clsx(styles.optionItem)}>
                                    {!true && (
                                        <>
                                            {true && <Icon className={styles.falseIcon} path={mdiClose} size={1.5} />}
                                            {!true && (
                                                <Icon className={styles.trueIcon} path={mdiCheckCircle} size={1.5} />
                                            )}
                                        </>
                                    )}
                                    D
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.question}>
                        <div className={styles.bodyQuestion}>
                            <div className={styles.title}>Câu 4</div>
                            <div className={styles.content}>
                                ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd
                                ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd
                                ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd
                                ddd ddd ddd
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
                            <div className={clsx(styles.footerText, { [styles.true]: false })}>Đáp án đúng: C</div>
                            {/* So sách đáp án chọn với từng optionItem, nếu khớp thì hiển thị hai icon, sau
                                đó so sánh đáp án chọ với đáp án đúng, nếu đúng hiển thị trueIcon, ngươc lại hiển thị falseIcon */}
                            <div className={styles.optionList}>
                                <button className={clsx(styles.optionItem)}>
                                    {true && (
                                        <>
                                            {true && <Icon className={styles.falseIcon} path={mdiClose} size={1.5} />}
                                            {!true && (
                                                <Icon className={styles.trueIcon} path={mdiCheckCircle} size={1.5} />
                                            )}
                                        </>
                                    )}
                                    A
                                </button>
                                <button className={clsx(styles.optionItem)}>
                                    {!true && (
                                        <>
                                            {true && <Icon className={styles.falseIcon} path={mdiClose} size={1.5} />}
                                            {!true && (
                                                <Icon className={styles.trueIcon} path={mdiCheckCircle} size={1.5} />
                                            )}
                                        </>
                                    )}
                                    B
                                </button>
                                <button className={clsx(styles.optionItem)}>
                                    {!true && (
                                        <>
                                            {true && <Icon className={styles.falseIcon} path={mdiClose} size={1.5} />}
                                            {!true && (
                                                <Icon className={styles.trueIcon} path={mdiCheckCircle} size={1.5} />
                                            )}
                                        </>
                                    )}
                                    C
                                </button>
                                <button className={clsx(styles.optionItem)}>
                                    {!true && (
                                        <>
                                            {true && <Icon className={styles.falseIcon} path={mdiClose} size={1.5} />}
                                            {!true && (
                                                <Icon className={styles.trueIcon} path={mdiCheckCircle} size={1.5} />
                                            )}
                                        </>
                                    )}
                                    D
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default History;
