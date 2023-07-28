import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../css/Notice.module.css';
import '../css/User.css';

const Notice = () => {
    
    const navigate = useNavigate();

    return (
        <>
       
            {/* fix Header - 뒤로가기/홈, 공유 */}
            <div class={styles.header}>
                <div class={styles.header__wrapper}>
                    <div class={styles.header__start}>
                        <img class={styles.header__icon} src='/images/back.png' onClick={()=>{navigate(-1)}}></img>
                        <Link to='/'><img class={styles.header__icon} src='/images/home2.png'></img></Link>
                    </div>  
                </div>
            </div>

            
            <div class={styles.notice__content__wrap}>

                    <div class={styles.notice__content}>  
                    <div class={styles.notice__bullet}>
                        <span>&#x2022;</span>
                    </div>    
                    <div class={styles.notice__wrap}>    
                        <div class={styles.notice}>
                            <span>Ut dolor magna fugiat sunt ex aliquip incididunt elit dolor reprehenderit dolore. </span>
                        </div>
                        <div class={styles.notice__date}>
                            <span>1시간전</span>
                        </div>                    
                    </div>
                </div>

                <div class={styles.notice__content}>                          
                    <div class={styles.notice__bullet}>
                        <span>&#x2022;</span>
                    </div>    
                    <div class={styles.notice__wrap}>    
                        <div class={styles.notice}>
                            <span>Laborum est voluptate proident eiusmod.</span>
                        </div>
                        <div class={styles.notice__date}>
                            <span>2시간전</span>
                        </div>                    
                    </div>
                </div>

                <div class={styles.notice__content}>                          
                    <div class={styles.notice__bullet}>
                        <span>&#x2022;</span>
                    </div>    
                    <div class={styles.notice__wrap}>    
                        <div class={styles.notice}>
                            <span>Consectetur incididunt eu dolore ex incididunt minim voluptate laborum eu laboris proident aute id. </span>
                        </div>
                        <div class={styles.notice__date}>
                            <span>3시간전</span>
                        </div>                    
                    </div>
                </div>

                <div class={styles.notice__content}>                          
                    <div class={styles.notice__bullet}>
                        <span>&#x2022;</span>
                    </div>    
                    <div class={styles.notice__wrap}>
                        <div class={styles.notice}>
                            <span>Cillum sit ex velit duis dolor proident amet excepteur culpa consequat. Est quis qui amet voluptate eiusmod elit.</span>
                        </div>
                        <div class={styles.notice__date}>
                            <span>4시간전</span>
                        </div>                    
                    </div>
                </div>

                <div class={styles.notice__content}>                          
                    <div class={styles.notice__bullet}>
                        <span>&#x2022;</span>
                    </div>    
                        <div class={styles.notice__wrap}>
                            <div class={styles.notice}>
                                <span>Anim aliquip consectetur magna minim magna et cupidatat. In duis pariatur deserunt cillum id ea do do incididunt ut labore veniam deserunt deserunt.</span>
                            </div>
                            <div class={styles.notice__date}>
                                <span>5시간전</span>
                            </div>                    
                    </div>
                </div>

                <div class={styles.notice__content}>                          
                    <div class={styles.notice__bullet}>
                        <span>&#x2022;</span>
                    </div>    
                        <div class={styles.notice__wrap}>
                            <div class={styles.notice}>
                                <span>Commodo Lorem enim aliqua cupidatat elit dolor consequat voluptate consectetur ipsum. Aliquip pariatur deserunt eu elit in eu occaecat et.</span>
                            </div>
                            <div class={styles.notice__date}>
                                <span>1일전</span>
                            </div>                    
                    </div>
                </div>
            </div>    
        </>
    );
};
  
export default Notice;