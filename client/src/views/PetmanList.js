import { Link, useNavigate } from 'react-router-dom';
import styles from '../css/PetmanList.module.css';
import '../css/User.css';
import React, {useState, useEffect} from 'react';
import Nav from './Nav';


const PetmanList = () => {

	const navigate = useNavigate();

	return (
		<>
			<div class={styles.header}>
				<div class={styles.header__wrapper}>
					<div class={styles.header__start}>         
						<img class={styles.header__icon} src='/images/back.png' onClick={()=>{navigate(-1)}}></img>
						<Link to='/'><img class={styles.header__icon} src='/images/home2.png'></img></Link>
						<span class={styles.header__area}>박촌동</span>				
					</div>
					<div class={styles.header__end}> 
						<Link to='/catalog'>
							<img class={styles.header__icon} src='/images/menu.png' alt=''></img>
						</Link>	
						<Link to='/notice'>	
							<img class={styles.header__icon} src='/images/alarm2.png' alt=''></img>
					    </Link>
					</div>
				</div>	
			</div>

            <Nav />

			<section class={styles.thumbs}> 
				<div class={styles.thumbs__wrapper}> 
					<div class={styles.thumbs__item}> 
						<div class={styles.thumbs__thumbnail}>
							<Link to='/content'> 
								<img class={styles.thumbs__thumbnail__img} src='/upload/puppy1.jpg'  alt=''/>
							</Link>
						</div>		
							
						<div class={styles.thumbs__info}>        
							<div class={styles.thumbs__text}> 
								<h1 class={styles.thumbs__text__content}>Amet eiusmod nulla eiusmod Lorem non ullamco consequat ... </h1><br/>
								<p class={styles.thumbs__text__date}>1시간전</p>
							</div>	

						</div>
						
					</div>		
		
					<div class={styles.thumbs__item}> 
						<div class={styles.thumbs__thumbnail}>
							<Link to='/content'> 
								<img class={styles.thumbs__thumbnail__img} src='/upload/puppy2.jpg'  alt=''/>
							</Link>	
						</div>		
						<div class={styles.thumbs__info}>        
							<div class={styles.thumbs__text}> 
								<h1 class={styles.thumbs__text__content}>Deserunt deserunt nisi magna ex excepteur.</h1><br/>
								<p class={styles.thumbs__text__date}>1시간전</p>
							</div>	
						</div>		
					</div>		
				
					<div class={styles.thumbs__item}> 
						<div class={styles.thumbs__thumbnail}>
							<Link to='/content'> 
								<img class={styles.thumbs__thumbnail__img} src='/upload/puppy3.jpg'  alt=''/>
							</Link>	
						</div>	
						<div class={styles.thumbs__info}>        
							<div class={styles.thumbs__text}> 
								<h1 class={styles.thumbs__text__content}>Deserunt deserunt nisi magna ex excepteur.</h1><br/>
								<p class={styles.thumbs__text__date}>2시간전</p>
							</div>	
						</div>	
					</div>	
				
				</div>
			</section>


            <Floting_Btn/>

		</>
	);
};


function Floting_Btn() {
	const [scrollPosition, setScrollPosition] = useState(0);
	const updateScroll = () => {
		setScrollPosition(window.scrollY || document.documentElement.scrollTop);
	}
	useEffect(()=>{
		window.addEventListener('scroll', updateScroll);
	});
	return (
		<div class={styles.floating__button}> 
			<span class={styles.move__board}> 
				<Link to='/petman/reg'>    
					<img src='/images/write.png'  alt=''/>  
				</Link> 	
			</span>
		</div> 
	);
};

export default PetmanList;