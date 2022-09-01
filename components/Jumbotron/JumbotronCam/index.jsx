import React from 'react';
import PropTypes from 'prop-types';
import styles from "./JumbotronCam.module.scss"

JumbotronCam.propTypes = {

};

function JumbotronCam(props)
{
    return (
        <section className={styles.container}>
            <div className={styles.main}>
                <h2>
                    CẢM
                </h2>
                <div className={styles.cards}>
                    <div>
                        <div className={styles.colCard}>
                            <img src="/images/emvatrinh.png" alt="Nói về: Em Và Trịnh" />
                            <h3>Nói về: Em Và Trịnh</h3>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="/images/quanvan.png" alt="Quán Văn" />
                            <div>
                                <h3>Quán Văn</h3>
                                <p>
                                    Nói về quán văn - "bệ phóng" tiếng hát Khánh Ly và nhạc Trịnh Công Sơn
                                </p>
                            </div>
                        </div>
                        <div>
                            <img src="/images/nguoinayhatnhacnguoixua.png" alt="Người nay hát nhạc người xưa?" />
                            <div>
                                <h3>Người nay hát nhạc người xưa?</h3>
                                <p>Tranh cải từ dự án âm nhạc "Gen Z và Trịnh": Những màn kết hợp lạc lối?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.btnContainer}>
                <button>
                    <a href="#">
                        XEM THÊM
                    </a>
                </button>
            </div>
        </section>
    );
}

export default JumbotronCam;