import React from 'react';
import './RegistrPassed.css'
import registerLogo from '../../img/registerLogo.png'
import {NavLink} from "react-router-dom";

const RegisterPassed = ({state, dispatch, setFinish}) => {
    const handleSaveData = () => {
        console.log(state);
        dispatch({type: 'CLEAR'})
        setFinish(false)
    }

    return (
        <div className="registerPassed">
            <h1>Registration completed successfully</h1>
            <img src={registerLogo} alt="register logo"/>
            <NavLink to="/navigator">
                <button onClick={handleSaveData}>To main</button>
            </NavLink>
        </div>
    )
}

export default RegisterPassed;