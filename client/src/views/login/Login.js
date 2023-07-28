import React, { useState, useEffect } from 'react';
import axios from 'axios';
import KakaoLogin from './KakaoLogin'; 
import GoogleLogin from './GoogleLogin'; 
import NaverLogin from './NaverLogin'; 
import styles from '../../css/Login.module.css';


const Login = () => {
    // const [inputId, setInputId] = useState('')
    // const [inputPw, setInputPw] = useState('')
 
	// input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
    // const handleInputId = (e) => {
    //     setInputId(e.target.value)
    // }
 
    // const handleInputPw = (e) => {
    //     setInputPw(e.target.value)
    // }
 
	// login 버튼 클릭 이벤트
    // const onClickLogin = () => {
    //     console.log('click login')
    // }
 
	// 페이지 렌더링 후 가장 처음 호출되는 함수
    // useEffect(() => {
    //     axios.get('http://localhost:3001/user_inform/login')
    //     .then(res => console.log('twice : ' + JSON.stringify(res)))
    //     .catch()
    // },
    // [])
 
    return(
        <form>
            <div className={styles.login__box}>
                <div className={styles.login__wrap}>
                    <div>
                        <KakaoLogin/>
                    </div>
                    <div>
                        <GoogleLogin/>
                    </div>
                    <div>
                        <NaverLogin/>
                    </div>
                </div>
            </div>
        </form>
    )
}
 
export default Login;