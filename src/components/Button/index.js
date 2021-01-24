import React from 'react';
import styles from './style.css';

const DefaultBtn = ({ children }) => {
    function handleClick() {
        console.log('クリックしました！');
    }
    return(<button className={ styles.defaultbtn }　onClick={handleClick}>{ children }</button>);
}

export default DefaultBtn;
