import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

Footer.propTypes = {

};

function Footer(props)
{
    return (
        <footer className={styles.container}>
            <div>
                <h2>
                    ABOUT US
                </h2>
                <p>
                    "Trịnh công sơn" là một dự án được thành lập bởi học sinh sinh viên yêu và cảm nhạc trịnh trên cả nước với mong muốn đem màu nhạc xưa, những lời ca nét bút của cố nhạc sĩ hay chỉ đơn giản là những mảnh chuyện nhỏ về cuộc đời ông đến thính/độc giả
                </p>
            </div>
            <div>
                <h2>
                    CONTACT US
                </h2>
                <ul>
                    <li>
                        <a href="#">
                            <FontAwesomeIcon icon={faFacebook} size="2x" /> TSCCPTER
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <FontAwesomeIcon icon={faInstagram} size="2x" /> TSCCPTER
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <FontAwesomeIcon icon={faYoutube} size="2x" /> TSCCPTER
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <FontAwesomeIcon icon={faPhone} size="2x" /> TSCCPTER
                        </a>
                    </li>
                </ul>
            </div>

            <div className={styles.btnDiv}>
                <button className={styles.btnSecondary}>
                    <a href="#">
                        ĐĂNG NHẬP
                    </a>
                </button>
                <button className={styles.btnPrimary}>
                    <a href="#">
                        ĐĂNG KÝ
                    </a>
                </button>
            </div>
        </footer>
    );
}

export default Footer;