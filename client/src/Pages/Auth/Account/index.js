import styles from './Account.module.scss';
import QuitButton from '../../../components/QuitButton';
import avatar from '../../../assets/images/avatar.png';
import clsx from 'clsx';

function Account() {
    return (
        <div className={styles.wrapper}>
            <QuitButton path={'/student/home'} />
            <div className={styles.title}>Cài đặt tài khoản</div>
            <div className={styles.content}>
                <div className={styles.head}>
                    <img className={styles.avatar} src={avatar} alt="avatar" />
                </div>
                <div className={styles.body}>
                    <div className={styles.item}>
                        <label className={styles.label}>Họ và tên</label>
                        <input className={styles.input} value={'Thai Tran'} onChange={() => {}} />
                    </div>
                    <div className={styles.item}>
                        <label className={styles.label}>Ngày sinh</label>
                        <input className={styles.input} value={'01-02-1990'} onChange={() => {}} type="date" />
                    </div>
                    <div className={styles.item}>
                        <label className={styles.label}>Email</label>
                        <input
                            className={clsx(styles.input, styles.disabled)}
                            value={'tranphuongthai000@gmail.com'}
                            onChange={() => {}}
                            disabled
                        />
                    </div>
                    <div className={styles.item}>
                        <label className={styles.label}>Số điện thoại</label>
                        <input className={styles.input} value={'0924585421'} onChange={() => {}} />
                    </div>
                    <div className={styles.item}>
                        <label className={styles.label}>Giới tính</label>
                        <div className={styles.inputGender}>
                            <div className={styles.radio}>
                                <input
                                    className={styles.radioCircuit}
                                    name="gender"
                                    value={true}
                                    type="radio"
                                    checked
                                />
                                Nam
                            </div>
                            <div className={styles.radio}>
                                <input className={styles.radioCircuit} name="gender" value={false} type="radio" />
                                Nữ
                            </div>
                        </div>
                    </div>
                </div>

                <button className={styles.btnUpdate}>Cập nhật</button>
            </div>
        </div>
    );
}

export default Account;
