import React from 'react';
import styles from './style.css';

const DefaultBtn = ({ children }) => {
    return(<button className={ styles.defaultbtn }>{ children }</button>);
}

export default DefaultBtn;
