import {GoogleLogin} from "@react-oauth/google";
import {GoogleOAuthProvider} from "@react-oauth/google";
import { GOOGLE_CLIENT_ID } from "../Properties";
import jwt_decode from 'jwt-decode'

const GoogleCallback = () => {
    return (
        <>
            <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
                <GoogleLogin
                    onSuccess={(res) => {
                        console.log('Encoded JWT ID token: ' + res.credential);
                        let userObject = jwt_decode(res.credential);
                        console.log(userObject);
                    }}
                    onFailure={(err) => {
                        console.log(err);
                    }}
                />
            </GoogleOAuthProvider>
        </>
    );
};

export default GoogleCallback