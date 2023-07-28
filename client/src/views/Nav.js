import { Link } from 'react-router-dom';
import styles from '../css/Nav.module.css';
import React from 'react';

const FooterMenu = () => {
	return (
		<>
			<nav class={styles.nav}>
				<ul class={styles.nav__wrapper}> 
					<Link to='/'>     
						<li> 
							<img class={styles.nav__icon} src='/images/home2.png' alt=''/>   
							<span class={styles.nav__menu}>홈</span>
						</li>
					</Link>		
					<Link to='/petman/list'>     
						<li> 
							<img class={styles.nav__icon} src='/images/vlog2.png'  alt=''/>   
							<span class={styles.nav__menu}>펫매니저</span>
						</li>
					</Link>		
					<Link to='/adopt'>    
						<li> 
							<img class={styles.nav__icon} src='/images/parcel2.png'  alt=''/>
							<span class={styles.nav__menu}>분양정보</span>  
						</li>
					</Link>		
					<Link to='/map'>        
						<li> 
							<img class={styles.nav__icon} src='/images/position2.png'  alt=''/>
							<span class={styles.nav__menu}>지역정보</span>
						</li>
					</Link>	
					<Link to='/'>    
						<li>
							<img class={styles.nav__icon} src='/images/user2.png'  alt=''/>    
							<span class={styles.nav__menu}>내정보</span>
						</li>
					</Link>		
				</ul>			
			</nav> 
        </>
    )
}

export default FooterMenu;

