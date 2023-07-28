import { KAKAO_REST_API_KEY, KAKAO_REDIRECT_URI } from "../Properties";

const KakaoLogin = () => {
    // const CLIENT_ID = `${process.env.REACT_APP_REST_API_KEY}`;
    // const REDIRECT_URI = `${process.env.REACT_APP_REDIRECT_URL}`;
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;
    const handleLogin = ()=>{
        window.location.href = kakaoURL
    }
    return (
        <img
            alt="카카오 로그인"
            src="images/kakao_login.png"
            // width="255"
            // height="35"
            style={{margin: '0px 24px 16px 24px'}}
            onClick={handleLogin}
        />
    )
}

export default KakaoLogin;