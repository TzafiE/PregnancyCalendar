import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId = '695529722509-1utn8c9sv59966vj3q6vtfpocsrrngro.apps.googleusercontent.com';

function Logout() {
    const onSuccess = (res) => {
        console.log('[Logout Success]');
    };

    const onFailure = (res) => {
        console.log('[Logout Failed] res: ', res);
    };

    return (
        <div>
            <GoogleLogout
                clientId={clientId}
                buttonText="Logout of Google"
                onLogoutSuccess={onSuccess}
                onFailure={onFailure}
                theme={'dark'}
            />
        </div>
    );
}

export default Logout;