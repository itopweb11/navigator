import React from 'react';
import '../Register.css'

const FormStep1 = ({state, handleOnChange, number}) => {
return (
    <div className='FormStep1'>
        <div className='FormStep1__heading'>
            <h2>Fill your personal data</h2>
        </div>
        <div className='FormStep1__inputs'>
            <div className='FormStep1__input'>
                <p>Username</p>
                <input
                    name="name"
                    value={state.name}
                    onChange={event => handleOnChange(event)}
                    className={state.name.length < 5 && number === 1 ? 'inputNon-active' : ''}
                    placeholder='Name'
                    type="text"
                    autoComplete="off"
                />
            </div>
            <div className='FormStep1__input'>
                <p>E-mail</p>
                <input
                    name="gmail"
                    value={state.gmail}
                    onChange={event => handleOnChange(event)}
                    className={state.gmail.length < 5 && number === 1 ? 'inputNon-active' : ''}
                    placeholder='example@mail.com'
                    type="text"
                    autoComplete="off"
                />
            </div>
            <div className='FormStep1__input'>
                <p>Url</p>
                <input
                    name="url"
                    value={state.url}
                    onChange={event => handleOnChange(event)}
                    className={state.url.length < 5 && number === 1 ? 'inputNon-active' : ''}
                    placeholder='https://themerofest.net'
                    type="text"
                    autoComplete="off"
                />
            </div>
            <div className='FormStep1__input'>
                <p>Password</p>
                <input
                    name="password"
                    value={state.password}
                    onChange={event => handleOnChange(event)}
                    className={state.password.length < 5 && number === 1 ? 'inputNon-active' : ''}
                    placeholder='Password'
                    type="text"
                    autoComplete="off"
                />
            </div>
        </div>
    </div>
)
}

export default FormStep1;