import { Link, useNavigate } from 'react-router-dom';
import styles from '../css/AdoptUpdate.module.css';
import '../css/User.css';
import React, {useState, useEffect} from 'react';

const AdoptUpdate = () => {
    
     const navigate = useNavigate();



    return (
		<>
            <div class={styles.header}>
                <div class={styles.header__wrapper}>
                    <div class={styles.header__start}>
                        <img class={styles.header__icon} src='/images/back.png' onClick={()=>{navigate(-1)}}></img>
                        <Link to='/'><img class={styles.header__icon} src='/images/home2.png'></img></Link>
                    </div>  
                </div>
            </div>

            <div class={styles.formbox}>
            <form>
                <Link to='/adopt/reg'>
                    <div class={styles.picture}>
                        <img class={styles.camera} src='/images/camera-gray.png'/>                    
                    </div>    
                </Link>
                <div class={styles.picture__text}>
                    <span>사진선택  (0/10)</span>
                </div>  

                <div class={styles.form__wrap}>
                        <input type='text' id='title' name='title' placeholder='제목을 입력해 주세요' required></input>
                        <input type='text' id='type' name='type' placeholder='품종을 입력해 주세요' required></input>
                        <input type='text' id='area' name='area' placeholder='분양 주소를 입력해 주세요' required></input>
                        <input type='text' id='name' name='name' placeholder='분양할 아이의 이름을 입력해 주세요' required></input>
                        <fieldset>
                            <label><input type="radio" name="gender" value="0" checked/><span>남</span></label>
                            <label><input type="radio" name="gender" value="1"/><span>여</span></label>
                        </fieldset>
                        <textarea id='vaccine' name='vaccine' placeholder='접종내역을 입력해 주세요' required/>
                        <input type='text' id='phone' name='phone' placeholder='연락처를 입력해 주세요' required></input>
                        <input type='text' id='regno' name='regno' placeholder='동물판매업 허가번호를 입력해 주세요'></input>
                        <input type='text' id='picture_dt' name='picture_dt' placeholder='사진촬영 일자(예: 20230112)' required></input>
                        <input type='text' id='price' name='price' placeholder='분양비/책임비를 입력해 주세요.' required></input>
                        <input type='text' id='addprice' name='addprice' placeholder='기타비용을 입력해 주세요.'></input>
                        <textarea id='etc' name='etc' placeholder='기타 내용을 입력해 주세요.'/>
                 
                </div>

                <input class={styles.form__submit} type='button' value='수정' />
                
            </form>
            </div>
           
        </>
    );
};


export default AdoptUpdate;