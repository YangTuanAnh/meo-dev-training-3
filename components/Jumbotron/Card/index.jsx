import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.scss'
import Image from "next/image"


Card.propTypes = {
};

function Card(props)
{
    return (
        <div className={styles.container} onClick={() => props.setModal(true)}>
            <figure>
                <div>
                    <img src={props.src} alt={props.caption} />
                </div>
                <figcaption>
                    {props.caption}
                </figcaption>
            </figure>
        </div>
    );
}

export default Card;