import { Link, useNavigate } from 'react-router-dom';
import styles from '../css/AdoptDetail.module.css';
import '../css/User.css';
import React, {useState, useEffect} from 'react';
import Slide from './Slide';

const AdoptDetail = () => {
    
    const navigate = useNavigate();
 
    const sliders = [ '/upload/puppy1.jpg', 
                      '/upload/puppy2.jpg', 
                      '/upload/puppy3.jpg' ];
                    

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
            <Slide contents={sliders}/> 

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
                    </div>
                    <div class={styles.icon__group}>
                        <Link to='/adopt/update'>
                            <img class={styles.icon__image} src='/images/write2.png'/>
                        </Link>
                        <Link to='/'>
                            <img class={styles.icon__image} src='/images/trashcan.png'/>   
                        </Link>
                    </div>   
                </div>
   
                <div class={styles.main__content__wrap}>
                    <div class={styles.main__content}>
                        <table>
                            <tr height='120px'>
                                <th colSpan='3'><p>말티푸 분양합니다.</p></th>
                            </tr>
                            <tr>
                                <td><span>&#x2022;</span></td>
                                <td>종</td>
                                <td>말티푸</td>
                            </tr>
                            <tr>
                                <td><span>&#x2022;</span></td>
                                <td> 분양지역</td>
                                <td>서울 강서구 화곡동</td>
                            </tr>                            
                            <tr>
                                <td><span>&#x2022;</span></td>
                                <td>이름</td>
                                <td>두부</td>
                            </tr>
                            <tr>
                                <td><span>&#x2022;</span></td>
                                <td>성별</td>
                                <td>여</td>
                            </tr>
                            <tr>
                                <td><span>&#x2022;</span></td>
                                <td>생년월일</td>
                                <td>2022.12.01</td>
                            </tr>
                            <tr>
                                <td><span>&#x2022;</span></td>
                                <td>접종내역</td>
                                <td>종합백신 2차까지 맞았어요.</td>
                            </tr>
                            <tr>
                                <td><span>&#x2022;</span></td>
                                <td>연락처</td>
                                <td>xxx-xxxx-xxxx</td>
                            </tr>
                            <tr>
                                <td><span>&#x2022;</span></td>
                                <td>동물판매업 허가번호</td>
                                <td>3370000-045-2023-0001</td>
                            </tr>
                            <tr>
                                <td><span>&#x2022;</span></td>
                                <td>사진촬영일자</td>
                                <td>2023-07-01</td>
                            </tr>
                            <tr>
                                <td><span>&#x2022;</span></td>
                                <td>분양가/책임비</td>
                                <td>10만원</td>
                            </tr>
                            <tr>
                                <td><span>&#x2022;</span></td>
                                <td>기타비용</td>
                                <td>용품 구매 및 마이크로칩 이전 비용</td>
                            </tr>
                            <tr>
                                <td><span>&#x2022;</span></td>
                                <td>기타</td>
                                <td>특이사항 없음.</td>
                            </tr>
                        </table>    
                    </div>
                    <div class={styles.main__content__date}>
                        <span>1시간전</span>
                        <div>
                            <Link to='/adopt/detail'>
                                <img class={styles.icon__image} src='/images/pin.png'  alt=''/>
                            </Link>
                        </div>
                    </div>                    
                </div>

                
            </div>
        
           
        </>
    );
};


export default AdoptDetail;