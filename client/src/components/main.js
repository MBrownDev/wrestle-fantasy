import style from '../styles/styles.module.css';
//import style from '../styles/styles.module.css';
import logo from '../logo.svg';
import React from 'react';

const Main = () => {
    return(
        <div className={style.Container}>
            <h1 className={style.words}>Hello World</h1>
            <div className={style.scroller}>
                <div className={style.scrolleritem}>
                    <img src={logo} alt="" />
                    <img src={logo} alt="" />
                    <img src={logo} alt="" />
                </div>
            </div>

        </div>
    )
}

export default Main;