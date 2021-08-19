import React from 'react';
import '../Register.css'

const RegisterFormStep2 = (props) => {
    return (
        <div className='FormStep1'>
            <div className='FormStep1__heading'>
                <h2>What’s your address</h2>
            </div>
            <div className='FormStep1__inputs'>
                <div className='FormStep1__input'>
                    <p>Country</p>
                    <input
                        value={props.Select}
                        onChange={e => props.setSelect(e.target.value)}
                        className={props.Select.length < 5 && props.number === 2 ? 'inputNon-active' : ''}
                        placeholder='Select country' type="text"
                    />
                </div>
                <div className='FormStep1__input'>
                    <p>City</p>
                    <input
                        value={props.CityName}
                        onChange={e => props.setCityName(e.target.value)}
                        className={props.CityName.length < 5 && props.number === 2 ? 'inputNon-active' : ''}
                        placeholder='City name' type="text"
                    />
                </div>
                <div className='FormStep1__input FormStep2__input_address'>
                    <p>Address</p>
                    <input
                        value={props.StreetName}
                        onChange={e => props.setStreetName(e.target.value)}
                        className={props.StreetName.length < 5 && props.number === 2 ? 'inputNon-active' : ''}
                        placeholder='Street name' type="text"
                    />
                    <input
                        value={props.Building}
                        onChange={e => props.setBuilding(e.target.value)}
                        className={props.Building.length < 5 && props.number === 2 ? 'inputNon-active' : ''}
                        placeholder='Building' type="text"
                    />
                </div>
                <div className='FormStep1__input'>
                    <p>ZIP Code</p>
                    <input
                        value={props.ZIPCode}
                        onChange={e => props.setZIPCode(e.target.value)}
                        className={props.ZIPCode.length < 5 && props.number === 2 ? 'inputNon-active' : ''}
                        type="text"
                    />
                </div>
            </div>
        </div>
    )
}

export default RegisterFormStep2;