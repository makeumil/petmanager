import { Link, useNavigate } from 'react-router-dom';
import styles from '../css/PetmanDetail.module.css';
import '../css/User.css';
import React, {useState, useEffect} from 'react';
import Slide from './Slide';

const PetmanDetail = () => {
    
    const navigate = useNavigate();
 
    const sliders = [ '/upload/puppy1.jpg', 
                      '/upload/puppy2.jpg', 
                      '/upload/puppy3.jpg',
                      '/upload/puppy4.jpg', 
                      '/upload/puppy5.jpg', 
                      '/upload/puppy6.jpg',
                      '/upload/puppy7.jpg', 
                      '/upload/puppy8.jpg', 
                      '/upload/puppy9.jpg',
                      '/upload/puppy10.jpg' ];

	return (
		<>

            {/* fix Header - 뒤로가기/홈, 공유 */}
            <div class={styles.header}>
                <div class={styles.header__wrapper}>
                    <div class={styles.header__start}>
                        <img class={styles.header__icon} src='/images/back.png' onClick={()=>{navigate(-1)}}></img>
                        <Link to='/'><img class={styles.header__icon} src='/images/home2.png'></img></Link>
                    </div>
                    <div class={styles.header__end}>
                        <img class={styles.header__icon} src='/images/share.png'></img>
                    </div>    
                </div>               
            </div>

            {/* 상단 이미지 70% */}
            <Slide contents={sliders} /> 

            {/* 하단 Content 30% */}
            <div class={styles.main__contents}>
                <div class='user'>
                    <div class='user__circle'>
                        <img class='user__image' src='/upload/puppy2.jpg'/>
                    </div>
                    <div class='user__info'>
                        <div class='user__box'>
                            <span class='user__name'>꽃님이아빠</span>
                            <span class='user__area'>박촌동</span> 									
                        </div>	
                        <div class='user__pet__box'>
                            <span class='user__pet'>꽃님이/믹스/여/7개월</span>																
                        </div>
                    </div>
                    <div class={styles.icon__group}>
                        <Link to='/'>
                            <img class={styles.icon__image} src='/images/write2.png'/>
                        </Link>
                        <Link to='/'>
                            <img class={styles.icon__image} src='/images/trashcan.png'/>   
                        </Link>
                    </div>   
                </div>
   
                <div class={styles.main__content__wrap}>
                    <div class={styles.main__content}>
                        <span>Ad commodo occaecat ullamco voluptate aute labore sint nostrud adipisicing aute. </span>
                    </div>
                    <div class={styles.main__content__date}>
                        <span>1시간전</span>
                        <div class={styles.main__content__good}>
                            <Link to='/detail'>
                                <img src='/images/heart.png'  alt=''/>
                            </Link>
                            <span>7</span>
                        </div>
                    </div>                    
                </div>

                <div class={styles.main__content__reaction}>      
                    <div class='user'>
                        <div class='user__circle'>
                            <img class='user__image' src='/upload/puppy4.jpg'/>
                        </div>
                        <div class='user__info'>
                            <div class='user__box'>
                                <span class='user__name'>둥이엄마</span>
                                <span class='user__area'>공항동</span> 									
                            </div>	
                        </div>
                        <div class={styles.icon__group}>
                            <Link to='/'>
                                <img class={styles.icon__image} src='/images/trashcan.png'/>   
                            </Link>
                        </div>
                    </div>
    
                    <div class={styles.main__content__wrap}>
                        <div class={styles.main__content}>
                            <span>Amet incididunt id sint dolore deserunt. </span>
                        </div>
                        <div class={styles.main__content__date}>
                            <span>30분전</span>
                        </div>                    
                    </div>
                </div>

                <div class={styles.main__content__reaction}>       
                    <div class='user'>
                        <div class='user__circle'>
                            <img class='user__image' src='/upload/puppy8.jpg'/>
                        </div>
                        <div class='user__info'>
                            <div class='user__box'>
                                <span class='user__name'>맛있는떡볶이</span>
                                <span class='user__area'>귤현동</span> 									
                            </div>	
                        </div>
                        <div class={styles.icon__group}>
                            <Link to='/'>
                                <img class={styles.icon__image} src='/images/trashcan.png'/>   
                            </Link>
                        </div>
                    </div>
    
                    <div class={styles.main__content__wrap}>
                        <div class={styles.main__content}>
                            <span>Esse esse mollit aliqua non. </span>
                        </div>
                        <div class={styles.main__content__date}>
                            <span>45분전</span>
                        </div>                    
                    </div>
                </div>

                <div class={styles.main__content__reaction}>      
                    <div class='user'>
                        <div class='user__circle'>
                            <img class='user__image' src='/upload/puppy12.jpg'/>
                        </div>
                        <div class='user__info'>
                            <div class='user__box'>
                                <span class='user__name'>자나깨나몸조심</span>
                                <span class='user__area'>계산동</span> 									
                            </div>	
                        </div>
                        <div class={styles.icon__group}>
                            <Link to='/'>
                                <img class={styles.icon__image} src='/images/trashcan.png'/>   
                            </Link>
                        </div>
                    </div>
    
                    <div class={styles.main__content__wrap}>
                        <div class={styles.main__content}>
                            <span>Ut dolor magna fugiat sunt ex aliquip incididunt elit dolor reprehenderit dolore. </span>
                        </div>
                        <div class={styles.main__content__date}>
                            <span>1시간전</span>
                        </div>                    
                    </div>
                </div>


            </div>
        
            {/* fix Footer */}
            <div class={styles.footer}>
                <form action='/content'>
                    <input type='text' id='reply' placeholder='댓글을 작성해 주세요' />
                    <input type='image' id='submit'  name='submit' src='/images/send2.png'/>
                </form>    
            </div>
        </>
    );
};


export default PetmanDetail;