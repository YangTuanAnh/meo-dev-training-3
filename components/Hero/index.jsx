import React from 'react';
import PropTypes from 'prop-types';
import styles from "../Hero/Hero.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

Hero.propTypes = {

};

function Hero(props)
{
    return (
        <main className={styles.Hero}>
            <div className={styles.search}>
                <form>
                    <input className={styles.searchBar} />
                    <FontAwesomeIcon icon={faMagnifyingGlass} size="2x" />
                </form>
            </div>


            <div className={styles.title}>
                <h1 className={styles.primaryHeader}>TRỊNH CÔNG SƠN</h1>
                <h1 className={styles.secondaryHeader}>TRỊNH CÔNG SƠN</h1>
            </div>
        </main>
    );
}

export default Hero;