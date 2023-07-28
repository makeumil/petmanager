
const GoogleLogin = () => {;
    const googleURL = `/google/auth`;
    const handleLogin = ()=>{
        window.location.href = googleURL;
    }
    return(
        <img
            alt="구글 로그인"
            src="images/google_login.png"
            style={{margin: '0px 24px 16px 24px'}}
            onClick={handleLogin}
        />
    )
}

export default GoogleLogin;