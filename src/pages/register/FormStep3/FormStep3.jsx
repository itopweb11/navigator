import React from 'react';
import '../Register.css'

const RegFormStep3 = ({state, handleOnChange, number}) => {
    return (
        <div className='FormStep1'>
            <div className='FormStep1__heading'>
                <h2>Set the preferences</h2>
            </div>
            <div className='FormStep1__inputs'>
                <div className='FormStep1__input'>
                    <p>Change Plan</p>
                    <input
                        name="change"
                        value={state.change}
                        onChange={event => handleOnChange(event)}
                        className={state.change.length < 5 && number === 3 ? 'inputNon-active' : ''}
                        placeholder='Choose plan'
                        type="text"
                        autoComplete="off"
                    />
                </div>
                <div className='FormStep1__input'>
                    <p>E-Mail Notifications </p>
                    <input
                        name="eMail"
                        value={state.eMail}
                        onChange={event => handleOnChange(event)}
                        className={state.eMail.length < 5 && number === 3 ? 'inputNon-active' : ''}
                        type="text"
                        autoComplete="off"
                    />
                </div>
                <p>Agreement offending commanded my an. Change wholly say why <br/> eldest period.</p>
                <div className='FormStep1__input'>
                    <p>Phone Notifications</p>
                    <input
                        name="phone"
                        value={state.phone}
                        onChange={event => handleOnChange(event)}
                        className={state.phone.length < 5 && number === 3 ? 'inputNon-active' : ''}
                        type="text"
                        autoComplete="off"
                    />
                </div>
                <p>Are projection put celebrated particular unreserved joy unsatiable its. In <br/> then dare good am rose bred or.</p>
            </div>
        </div>
    )
}

export default RegFormStep3;