import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Navbar/Navbar.module.scss'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

Navbar.propTypes = {

};

function Navbar(props)
{
    return (
        <nav className={styles.nav}>
            <ul className={styles.tabs}>
                <li>
                    <Link href="#">
                        <a><FontAwesomeIcon icon={faMusic} size="2x" /></a>
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <a>TIỂU SỬ</a>
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <a>MỤC LỤC</a>
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <a>TÌM KIẾM</a>
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <a>LIÊN HỆ</a>
                    </Link>
                </li>
            </ul>
            <ul className={styles.auth}>
                <li>
                    <Link href="#">
                        <a>ĐĂNG NHẬP</a>
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <a className={styles.signup}>ĐĂNG KÝ</a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;