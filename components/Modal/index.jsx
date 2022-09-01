import React from 'react';
import PropTypes from 'prop-types';
import styles from "./Modal.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

function Modal({ setIsOpen })
{
    return (
        <div className={styles.container}>
            <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
            <div className={styles.modal}>
                <h2>
                    <FontAwesomeIcon icon={faMusic} />: DIỄM XƯA - MỐI TÌNH ĐẦU DAY DỨT CỦA TRỊNH CÔNG SƠN
                </h2>
                <div className={styles.mockModal}>
                    <img src="/images/mockmodal.png" />
                </div>
            </div>
        </div>
    );
}

export default Modal;