import React from 'react';
import { GoogleLogin } from 'react-google-login';

const clientId = '695529722509-1utn8c9sv59966vj3q6vtfpocsrrngro.apps.googleusercontent.com';

function Login() {
    const onSuccess = (res) => {
        console.log('[Login Success] currentUser: ', res.profileObj);
    };

    const onFailure = (res) => {
        console.log('[Login Failed] res: ', res);
    };

    return (
        <div>
            <GoogleLogin
                clientId={clientId}
                buttonText="Login with Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={false}
                theme={'dark'}
                accessType={'offline'}
                responseType={'code'}
            />
        </div>
    );
}

export default Login;