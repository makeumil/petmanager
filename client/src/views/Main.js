import { Link } from 'react-router-dom';
import styles from '../css/Main.module.css';
import '../css/User.css';
import React, {useState, useEffect} from 'react';
import FooterMenu from './FooterMenu';
import Nav from './Nav';

const Main = () => {
	return (
		<>
			<div class={styles.header}>
				<div class={styles.header__wrapper}>
					<div class={styles.header__start}>         
						<Link to='/'>
							<img class={styles.header__icon} src='/images/search2.png' alt=''></img>  
						</Link>	
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
							<div class={styles.thumbs__profile__group}>  
								<div class={styles.thumbs__profile__title}>
									<span class='user__name'>꽃님이아빠</span>
									<span class='user__area'>박촌동</span> 									
								</div>	
								<div class={styles.thumbs__profile__title}>
									<span class='user__pet'>꽃님이/믹스/여/7개월</span>																
								</div>
							</div>	
							<div class={styles.thumbs__text}> 
								<h1 class={styles.thumbs__text__content}>Amet eiusmod nulla eiusmod Lorem non ullamco consequat ... </h1><br/>
								<p class={styles.thumbs__text__date}>1시간전</p>
							</div>	

							<div class={styles.thumbs__frends}>  
								<img class={styles.thumbs__heart__image} src='/images/heart.png'  alt=''/>
								<p class={styles.thumbs__text__heart}>7</p>
								<img class={styles.thumbs__speech__image} src='/images/speech.png'  alt=''/>
								<p class={styles.thumbs__text__speech}>20</p>
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
							<div class={styles.thumbs__profile__group}>   
								<div class={styles.thumbs__profile__title}>
									<span class='user__name'>꽃님이엄마</span>
									<span class='user__area'>가양동</span> 									
								</div>	
								<div class={styles.thumbs__profile__title}>
									<span class='user__pet'>꽃님이/믹스/여/7개월</span>																
								</div>
							</div>	
							<div class={styles.thumbs__text}> 
								<h1 class={styles.thumbs__text__content}>Deserunt deserunt nisi magna ex excepteur.</h1><br/>
								<p class={styles.thumbs__text__date}>1시간전</p>
							</div>	
							<div class={styles.thumbs__frends}>  
								<img class={styles.thumbs__heart__image} src='/images/heart.png'  alt=''/>
								<p class={styles.thumbs__text__heart}>7</p>
								<img class={styles.thumbs__speech__image} src='/images/speech.png'  alt=''/>
								<p class={styles.thumbs__text__speech}>20</p>
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
							<div class={styles.thumbs__profile__group}>   
								<div class={styles.thumbs__profile__title}>
									<span class='user__name'>꽃님이삼촌</span>
									<span class='user__area'>계산동</span> 									
								</div>	
								<div class={styles.thumbs__profile__title}>
									<span class='user__pet'>꽃님이/믹스/여/7개월</span>																
								</div>
							</div>	
							<div class={styles.thumbs__text}> 
								<h1 class={styles.thumbs__text__content}>Deserunt deserunt nisi magna ex excepteur.</h1><br/>
								<p class={styles.thumbs__text__date}>2시간전</p>
							</div>	
							<div class={styles.thumbs__frends}>  
								<img class={styles.thumbs__heart__image} src='/images/heart.png'  alt=''/>
								<p class={styles.thumbs__text__heart}>7</p>
								<img class={styles.thumbs__speech__image} src='/images/speech.png'  alt=''/>
								<p class={styles.thumbs__text__speech}>20</p>
							</div>	
						</div>	
					</div>	
				
					<div class={styles.thumbs__item}> 
						<div class={styles.thumbs__thumbnail}>
							<Link to='/content'> 
								<img class={styles.thumbs__thumbnail__img} src='/upload/puppy4.jpg'  alt=''/>
							</Link> 	
						</div>	
						<div class={styles.thumbs__info}>        
							<div class={styles.thumbs__profile__group}>   
								<div class={styles.thumbs__profile__title}>
									<span class='user__name'>꽃님이오빠</span>
									<span class='user__area'>귤현동</span> 									
								</div>	
								<div class={styles.thumbs__profile__title}>
									<span class='user__pet'>꽃님이/믹스/여/7개월</span>																
								</div>
							</div>	
							<div class={styles.thumbs__text}> 
								<h1 class={styles.thumbs__text__content}>Deserunt deserunt nisi magna ex excepteur.</h1><br/>
								<p class={styles.thumbs__text__date}>30분전</p>
							</div>	
							<div class={styles.thumbs__frends}>  
								<img class={styles.thumbs__heart__image} src='/images/heart.png'  alt=''/>
								<p class={styles.thumbs__text__heart}>7</p>
								<img class={styles.thumbs__speech__image} src='/images/speech.png'  alt=''/>
								<p class={styles.thumbs__text__speech}>20</p>
							</div>	
						</div>	
					</div>
									
					<div class={styles.thumbs__item}> 
						<div class={styles.thumbs__thumbnail}>
							<Link to='/content'> 
								<img class={styles.thumbs__thumbnail__img} src='/upload/puppy5.jpg'  alt=''/>
							</Link> 	
						</div>	
						<div class={styles.thumbs__info}>        
							<div class={styles.thumbs__profile__group}>   
								<div class={styles.thumbs__profile__title}>
									<span class='user__name'>꽃님이동생</span>
									<span class='user__area'>동양동</span> 									
								</div>	
								<div class={styles.thumbs__profile__title}>
									<span class='user__pet'>꽃님이/믹스/여/7개월</span>																
								</div>
							</div>	
							<div class={styles.thumbs__text}> 
								<h1 class={styles.thumbs__text__content}>Deserunt deserunt nisi magna ex excepteur.</h1><br/>
								<p class={styles.thumbs__text__date}>1일전</p>
							</div>	
							<div class={styles.thumbs__frends}>  
								<img class={styles.thumbs__heart__image} src='/images/heart.png'  alt=''/>
								<p class={styles.thumbs__text__heart}>7</p>
								<img class={styles.thumbs__speech__image} src='/images/speech.png'  alt=''/>
								<p class={styles.thumbs__text__speech}>20</p>
							</div>	
						</div>	
					</div>
									
					<div class={styles.thumbs__item}> 
						<div class={styles.thumbs__thumbnail}>
							<Link to='/content'> 
								<img class={styles.thumbs__thumbnail__img} src='/upload/puppy6.jpg'  alt=''/>
							</Link> 	
						</div>	
						<div class={styles.thumbs__info}>        
							<div class={styles.thumbs__profile__group}>   
								<div class={styles.thumbs__profile__title}>
									<span class='user__name'>꽃님이친구</span>
									<span class='user__area'>공항동</span> 									
								</div>	
								<div class={styles.thumbs__profile__title}>
									<span class='user__pet'>꽃님이/믹스/여/7개월</span>																
								</div>
							</div>	
							<div class={styles.thumbs__text}> 
								<h1 class={styles.thumbs__text__content}>Deserunt deserunt nisi magna ex excepteur.</h1><br/>
								<p class={styles.thumbs__text__date}>15분전</p>
							</div>	
							<div class={styles.thumbs__frends}>  
								<img class={styles.thumbs__heart__image} src='/images/heart.png'  alt=''/>
								<p class={styles.thumbs__text__heart}>7</p>
								<img class={styles.thumbs__speech__image} src='/images/speech.png'  alt=''/>
								<p class={styles.thumbs__text__speech}>20</p>
							</div>	
						</div>	
					</div>
									
					<div class={styles.thumbs__item}> 
						<div class={styles.thumbs__thumbnail}>
							<Link to='/content'> 
								<img class={styles.thumbs__thumbnail__img} src='/upload/puppy7.jpg'  alt=''/>
							</Link> 	
						</div>	
						<div class={styles.thumbs__info}>        
							<div class={styles.thumbs__profile__group}>   
								<div class={styles.thumbs__profile__title}>
									<span class='user__name'>꽃님이사촌</span>
									<span class='user__area'>서초동</span> 									
								</div>	
								<div class={styles.thumbs__profile__title}>
									<span class='user__pet'>꽃님이/믹스/여/7개월</span>																
								</div>
							</div>	
							<div class={styles.thumbs__text}> 
								<h1 class={styles.thumbs__text__content}>Deserunt deserunt nisi magna ex excepteur.</h1><br/>
								<p class={styles.thumbs__text__date}>23시간전</p>
							</div>	
							<div class={styles.thumbs__frends}>  
								<img class={styles.thumbs__heart__image} src='/images/heart.png'  alt=''/>
								<p class={styles.thumbs__text__heart}>7</p>
								<img class={styles.thumbs__speech__image} src='/images/speech.png'  alt=''/>
								<p class={styles.thumbs__text__speech}>20</p>
							</div>	
						</div>	
					</div>
									
					<div class={styles.thumbs__item}> 
						<div class={styles.thumbs__thumbnail}>
							<Link to='/content'> 
								<img class={styles.thumbs__thumbnail__img} src='/upload/puppy8.jpg'  alt=''/>
							</Link> 	
						</div>	
						<div class={styles.thumbs__info}>        
							<div class={styles.thumbs__profile__group}>   
								<div class={styles.thumbs__profile__title}>
									<span class='user__name'>꽃님이고모</span>
									<span class='user__area'>신천동</span> 									
								</div>	
								<div class={styles.thumbs__profile__title}>
									<span class='user__pet'>없음</span>																
								</div>
							</div>	
							<div class={styles.thumbs__text}> 
								<h1 class={styles.thumbs__text__content}>Deserunt deserunt nisi magna ex excepteur.</h1><br/>
								<p class={styles.thumbs__text__date}>45분전</p>
							</div>	
							<div class={styles.thumbs__frends}>  
								<img class={styles.thumbs__heart__image} src='/images/heart.png'  alt=''/>
								<p class={styles.thumbs__text__heart}>7</p>
								<img class={styles.thumbs__speech__image} src='/images/speech.png'  alt=''/>
								<p class={styles.thumbs__text__speech}>20</p>
							</div>	
						</div>	
					</div>
									
					<div class={styles.thumbs__item}> 
						<div class={styles.thumbs__thumbnail}>
							<Link to='/content'> 
								<img class={styles.thumbs__thumbnail__img} src='/upload/puppy9.jpg'  alt=''/>
							</Link> 	
						</div>	
						<div class={styles.thumbs__info}>        
							<div class={styles.thumbs__profile__group}>   
								<div class={styles.thumbs__profile__title}>
									<span class='user__name'>꽃님이이모</span>
									<span class='user__area'>고강동</span> 									
								</div>	
								<div class={styles.thumbs__profile__title}>
									<span class='user__pet'>꽃님이/믹스/여/7개월</span>																
								</div>	
							</div>	
							<div class={styles.thumbs__text}> 
								<h1 class={styles.thumbs__text__content}>Deserunt deserunt nisi magna ex excepteur.</h1><br/>
								<p class={styles.thumbs__text__date}>1시간전</p>
							</div>	
							<div class={styles.thumbs__frends}>  
								<img class={styles.thumbs__heart__image} src='/images/heart.png'  alt=''/>
								<p class={styles.thumbs__text__heart}>7</p>
								<img class={styles.thumbs__speech__image} src='/images/speech.png'  alt=''/>
								<p class={styles.thumbs__text__speech}>20</p>
							</div>	
						</div>	
					</div>
									
					<div class={styles.thumbs__item}> 
						<div class={styles.thumbs__thumbnail}>
							<Link to='/content'> 
								<img class={styles.thumbs__thumbnail__img} src='/upload/puppy10.jpg'  alt=''/>
							</Link> 	
						</div>	
						<div class={styles.thumbs__info}>        
							<div class={styles.thumbs__profile__group}>   
								<div class={styles.thumbs__profile__title}>
									<span class='user__name'>꽃님이아빠</span>
									<span class='user__area'>박촌동</span> 									
								</div>	
								<div class={styles.thumbs__profile__title}>
									<span class='user__pet'>꽃님이/믹스/여/7개월</span>																
								</div>
							</div>	
							<div class={styles.thumbs__text}> 
								<h1 class={styles.thumbs__text__content}>Deserunt deserunt nisi magna ex excepteur.</h1><br/>
								<p class={styles.thumbs__text__date}>1시간전</p>
							</div>	
							<div class={styles.thumbs__frends}>  
								<img class={styles.thumbs__heart__image} src='/images/heart.png'  alt=''/>
								<p class={styles.thumbs__text__heart}>7</p>
								<img class={styles.thumbs__speech__image} src='/images/speech.png'  alt=''/>
								<p class={styles.thumbs__text__speech}>20</p>
							</div>	
						</div>	
					</div>
									
					<div class={styles.thumbs__item}> 
						<div class={styles.thumbs__thumbnail}>
							<Link to='/content'> 
								<img class={styles.thumbs__thumbnail__img} src='/upload/puppy11.jpg'  alt=''/>
							</Link> 	
						</div>	
						<div class={styles.thumbs__info}>        
							<div class={styles.thumbs__profile__group}>   
								<div class={styles.thumbs__profile__title}>
									<span class='user__name'>꽃님이아빠</span>
									<span class='user__area'>박촌동</span> 									
								</div>	
								<div class={styles.thumbs__profile__title}>
									<span class='user__pet'>꽃님이/믹스/여/7개월</span>																
								</div>	
							</div>	
							<div class={styles.thumbs__text}> 
								<h1 class={styles.thumbs__text__content}>Deserunt deserunt nisi magna ex excepteur.</h1><br/>
								<p class={styles.thumbs__text__date}>1시간전</p>
							</div>	
							<div class={styles.thumbs__frends}>  
								<img class={styles.thumbs__heart__image} src='/images/heart.png'  alt=''/>
								<p class={styles.thumbs__text__heart}>7</p>
								<img class={styles.thumbs__speech__image} src='/images/speech.png'  alt=''/>
								<p class={styles.thumbs__text__speech}>20</p>
							</div>	
						</div>	
					</div>
									
					<div class={styles.thumbs__item}> 
						<div class={styles.thumbs__thumbnail}>
							<Link to='/content'> 
								<img class={styles.thumbs__thumbnail__img} src='/upload/puppy12.jpg'  alt=''/>
							</Link> 	
						</div>	
						<div class={styles.thumbs__info}>        
							<div class={styles.thumbs__profile__group}>   
								<div class={styles.thumbs__profile__title}>
									<span class='user__name'>꽃님이아빠</span>
									<span class='user__area'>박촌동</span> 									
								</div>	
								<div class={styles.thumbs__profile__title}>
									<span class='user__pet'>꽃님이/믹스/여/7개월</span>																
								</div>
							</div>	
							<div class={styles.thumbs__text}> 
								<h1 class={styles.thumbs__text__content}>Deserunt deserunt nisi magna ex excepteur.</h1><br/>
								<p class={styles.thumbs__text__date}>1시간전</p>
							</div>	
							<div class={styles.thumbs__frends}>  
								<img class={styles.thumbs__heart__image} src='/images/heart.png'  alt=''/>
								<p class={styles.thumbs__text__heart}>7</p>
								<img class={styles.thumbs__speech__image} src='/images/speech.png'  alt=''/>
								<p class={styles.thumbs__text__speech}>20</p>
							</div>	
						</div>	
					</div>

				</div>
			</section>


            {/* <Floting_Btn/> */}

	        <FooterMenu />

		</>
	);
};


export default Main;