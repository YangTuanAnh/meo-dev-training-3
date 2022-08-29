import React from 'react';
import PropTypes from 'prop-types';
import styles from "../Hero/Hero.module.scss"

Hero.propTypes = {

};

function Hero(props)
{
    return (
        <main className={styles.Hero}>
            <div>
                <input className={styles.searchBar} />
            </div>
            <div>
                <h1 className={styles.primaryHeader}>TRỊNH CÔNG SƠN</h1>
                <h1 className={styles.secondaryHeader}>TRỊNH CÔNG SƠN</h1>
            </div>
        </main>
    );
}

export default Hero;