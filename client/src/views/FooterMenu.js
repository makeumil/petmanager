import { Link } from 'react-router-dom';
import styles from '../css/FooterMenu.module.css';
import React from 'react';

const FooterMenu = () => {
	return (
		<>

        <div class={styles.footer}>
            <div class={styles.footer__contents}>     
                <div class={styles.footer__item}>
                    <Link to='/'>
                    <img class={styles.footer__icon} src='/images/home2.png'  alt=''/>  
                    <p>홈</p>
                    </Link> 
                </div>	
                <div class={styles.footer__item}>
                    <Link to='/petman/list'>   
                    <img class={styles.footer__icon} src='/images/vlog2.png'  alt=''/>  
                    <p>펫매니저</p>
                    </Link> 
                </div>
                <div class={styles.footer__item}>  
                    <Link to='/adopt'>
                    <img class={styles.footer__icon} src='/images/parcel2.png'  alt=''/>
                    <p>분양정보</p>
                    </Link> 
                </div>	
                <div class={styles.footer__item}> 
                    <Link to='/map'>
                    <img class={styles.footer__icon} src='/images/position2.png'  alt=''/>
                    <p>지역정보</p>
                    </Link> 
                </div>
                <div class={styles.footer__item}>
                    <Link to='/'>
                    <img class={styles.footer__icon} src='/images/user2.png'  alt=''/>   
                    <p>사용자</p>
                    </Link> 
                </div>		
            </div>	
        </div>	
        </>
    )
}

export default FooterMenu;

