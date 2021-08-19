import React from 'react';
import '../Register.css'

const RegFormStep3 = (props) => {
    return (
        <div className='FormStep1'>
            <div className='FormStep1__heading'>
                <h2>Set the preferences</h2>
            </div>
            <div className='FormStep1__inputs'>
                <div className='FormStep1__input'>
                    <p>Change Plan</p>
                    <input
                        value={props.Change}
                        onChange={e => props.setChange(e.target.value)}
                        className={props.Change.length < 5 && props.number === 3 ? 'inputNon-active' : ''}
                        placeholder='Choose plan' type="text"/>
                </div>
                <div className='FormStep1__input'>
                    <p>E-Mail Notifications </p>
                    <input
                        value={props.EMail}
                        onChange={e => props.setEMail(e.target.value)}
                        className={props.EMail.length < 5 && props.number === 3 ? 'inputNon-active' : ''}
                        type="text"/>
                </div>
                <p>Agreement offending commanded my an. Change wholly say why <br/> eldest period.</p>
                <div className='FormStep1__input'>
                    <p>Phone Notifications</p>
                    <input
                        value={props.Phone}
                        onChange={e => props.setPhone(e.target.value)}
                        className={props.Phone.length < 5 && props.number === 3 ? 'inputNon-active' : ''}
                        type="text"/>
                </div>
                <p>Are projection put celebrated particular unreserved joy unsatiable its. In <br/> then dare good am rose bred or.</p>
            </div>
        </div>
    )
}

export default RegFormStep3;