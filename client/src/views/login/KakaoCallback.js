import React, { useEffect } from "react";
import axios from "axios"
import { KAKAO_REST_API_KEY, KAKAO_REDIRECT_URI } from "../Properties";

const KakaoCallback = () => {
    useEffect(() => {
        const params= new URL(document.location.toString()).searchParams;
        const code = params.get('code');
        const grantType = "authorization_code";
        // const REST_API_KEY = `${process.env.REACT_APP_REST_API_KEY}`;
        // const REDIRECT_URI = `${process.env.REACT_APP_REDIRECT_URL}`;

        axios.post(
            `https://kauth.kakao.com/oauth/token?grant_type=${grantType}&client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&code=${code}`,
            {},
            { headers: { "Content-type": "application/x-www-form-urlencoded;charset=utf-8" } }
        )
        .then((res) => {
            console.log(res);
            const { access_token } = res.data;
            axios.post(
                `https://kapi.kakao.com/v2/user/me`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${access_token}`,
                        "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
                    }
                }
            )
            .then((res) => {
                console.log('2번쨰', res.data);
            })
        })
        .catch((Error) => {
            console.log(Error)
        })
    }, [])
    
    return(
        <>
        </>
    )
}
export default KakaoCallback;