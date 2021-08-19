import React from 'react';
import '../Register.css'

const FormStep1 = (props) => {
return (
    <div className='FormStep1'>
        <div className='FormStep1__heading'>
            <h2>Fill your personal data</h2>
        </div>
        <div className='FormStep1__inputs'>
            <div className='FormStep1__input'>
                <p>Username</p>
                <input
                    value={props.Name}
                    onChange={e => props.setName(e.target.value)}
                    className={props.Name.length < 5 && props.number === 1 ? 'inputNon-active' : ''}
                    placeholder='Name' type="text"/>
            </div>
            <div className='FormStep1__input'>
                <p>E-mail</p>
                <input
                    value={props.Gmail}
                    onChange={e => props.setGmail(e.target.value)}
                    className={props.Gmail.length < 5 && props.number === 1 ? 'inputNon-active' : ''}
                    placeholder='example@mail.com' type="text"/>
            </div>
            <div className='FormStep1__input'>
                <p>Url</p>
                <input
                    value={props.Url}
                    onChange={e => props.setUrl(e.target.value)}
                    className={props.Url.length < 5 && props.number === 1 ? 'inputNon-active' : ''}
                    placeholder='https://themerofest.net' type="text"/>
            </div>
            <div className='FormStep1__input'>
                <p>Password</p>
                <input
                    value={props.Password}
                    onChange={e => props.setPassword(e.target.value)}
                    className={props.Password.length < 5 && props.number === 1 ? 'inputNon-active' : ''}
                    placeholder='Password' type="text"/>
            </div>
        </div>
    </div>
)
}

export default FormStep1;