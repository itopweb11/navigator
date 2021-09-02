import React from 'react';
import '../Register.css'


const RegisterFormStep2 = ({state, handleOnChange, number}) => {
    console.log(state)
    return (
        <div className='FormStep1'>
            <div className='FormStep1__heading'>
                <h2>What’s your address</h2>
            </div>
            <div className='FormStep1__inputs'>
                <div className='FormStep1__input'>
                    <p>Country</p>
                    <input
                        name="select"
                        value={state.select}
                        onChange={event => handleOnChange(event)}
                        className={state.select.length < 5 && number === 2 ? 'inputNon-active' : ''}
                        placeholder='Select country'
                        type="text"
                        autoComplete="off"
                    />
                </div>
                <div className='FormStep1__input'>
                    <p>City</p>
                    <input
                        name="cityName"
                        value={state.cityName}
                        onChange={event => handleOnChange(event)}
                        className={state.cityName.length < 5 && number === 2 ? 'inputNon-active' : ''}
                        placeholder='City name'
                        type="text"
                        autoComplete="off"
                    />
                </div>
                <div className='FormStep1__input FormStep2__input_address'>
                    <p>Address</p>
                    <input
                        name="streetName"
                        value={state.streetName}
                        onChange={event => handleOnChange(event)}
                        className={state.streetName.length < 5 && number === 2 ? 'inputNon-active' : ''}
                        placeholder='Street name'
                        type="text"
                        autoComplete="off"
                    />
                    <input
                        name="building"
                        value={state.building}
                        onChange={event => handleOnChange(event)}
                        className={state.building.length < 5 && number === 2 ? 'inputNon-active' : ''}
                        placeholder='Building'
                        type="text"
                        autoComplete="off"
                    />
                </div>
                <div className='FormStep1__input'>
                    <p>ZIP Code</p>
                    <input
                        name="zipCode"
                        value={state.zipCode}
                        onChange={event => handleOnChange(event)}
                        className={state.zipCode.length < 5 && number === 2 ? 'inputNon-active' : ''}
                        type="text"
                        autoComplete="off"
                    />
                </div>
            </div>
        </div>
    )
}

export default RegisterFormStep2;