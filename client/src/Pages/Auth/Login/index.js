import styles from './Login.module.scss';

function Login() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.formWrapper}>
                <div className={styles.title}>Đăng nhập</div>
                <form method="GET" action="" className={styles.form}>
                    <div className={styles.formGroup}>
                        <input type="text" name="user" id="login" class="fadeIn second" placeholder="Mã đăng nhập" />
                    </div>
                    <div className={styles.formGroup}>
                        <input type="text" name="password" id="password" class="fadeIn third" placeholder="Mật khẩu" />
                    </div>
                    <button type="submit" className={styles.submitBtn}>
                        Log in
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
