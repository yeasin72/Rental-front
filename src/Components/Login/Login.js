import React, { useState } from 'react';
import './Login.css'
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

const Login = () => {
    const [passwordtoggle, setpasswordtoggle] = useState(false);
    const passToggle = () => {
        setpasswordtoggle(!passwordtoggle)
    }


    return (
        <div className="login-page" style={{backgroundImage: 'url("./img/loginbg.svg")'}}>
            <div className="container">
                <div className="login-main-content">
                    <div className="logo-area">
                        <img src="./img/logo.svg" alt="Logo" />
                    </div>
                    <div className="login-form">
                        <input type="text" placeholder="Email" />
                    </div>
                    <div className="login-form-pass">
                        <input type={passwordtoggle ? "text" : "password"} placeholder="password"></input>
                        {passwordtoggle ? 
                            <VisibilityOffIcon onClick={passToggle} />
                        :
                            <VisibilityIcon onClick={passToggle} />
                        }
                    </div>
                    <div className="login-submit">
                        <button>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
