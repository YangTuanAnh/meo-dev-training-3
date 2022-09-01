import { React, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './JumbotronTabs.module.scss'
import Card from '../Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight, faMusic } from '@fortawesome/free-solid-svg-icons';
import Modal from '../../Modal';

JumbotronTabs.propTypes = {

};

function JumbotronTabs(props)
{
    const [modal, setModal] = useState(false);
    return (
        <section className={styles.container}>
            {modal && <Modal setIsOpen={setModal} />}
            <div className={styles.cardContainer}>
                <h2>
                    THƯ TÌNH GỬI MỘT NGƯỜI
                </h2>
                <div className={styles.cards}>

                    <Card
                        src="/images/bucthu1.png"
                        caption="Bức thu số 01: 2.9.1964"
                        setModal={setModal} />
                    <Card
                        src="/images/bucthu2.png"
                        caption="Bức thu số 02: 3.9.1964"
                        setModal={setModal} />
                    <Card
                        src="/images/bucthu3.png"
                        caption="Bức thu số 03: 17.9.1964"
                        setModal={setModal} />
                    <FontAwesomeIcon icon={faArrowAltCircleRight} size="5x" />
                </div>
            </div>
            <div className={styles.cardContainer}>
                <h2>
                    <FontAwesomeIcon icon={faMusic} size="xl" />
                </h2>
                <div className={styles.cards}>

                    <Card
                        src="/images/diemxua.png"
                        caption="Diễm xưa"
                        setModal={setModal} />
                    <Card
                        src="/images/tathaygidemnay.png"
                        caption="Ta thấy gì đêm nay"
                        setModal={setModal} />
                    <Card
                        src="/images/nhinnhungmuathudi.png"
                        caption="Nhìn những mùa thu đi"
                        setModal={setModal} />
                    <FontAwesomeIcon icon={faArrowAltCircleRight} size="5x" />
                </div>
            </div>
        </section>
    );
}

export default JumbotronTabs;