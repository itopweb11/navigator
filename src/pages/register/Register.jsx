import React, {useState} from 'react';
import './Register.scss';
import FormStep1 from "./FormStep1/FormStep1";
import RegisterFormStep2 from "./FormStep2/FormStep2";
import RegFormStep3 from "./FormStep3/FormStep3";

const Register = ({setFinish, handleOnChange, state}) => {
    const [count, setCount] = useState(1)
    const [number, setNumber] = useState(0)

    const inputCheckStep1 = ()=> {
        switch (count) {
            case 1:
                if (state.name.length < 5 || state.gmail.length < 5 || state.url.length < 5 || state.password.length < 5) {
                    setNumber(1)
                    return;
                }
                setCount(2);
                break;
            case 2:
                if (state.select.length < 5 || state.cityName.length <5 || state.streetName.length <5 || state.building.length < 5 || state.zipCode.length < 5) {
                    setNumber(2)
                    return;
                }
                setCount(3)
                break;
            case 3:
                if (state.change.length < 5 || state.eMail.length <5 || state.phone.length <5 ) {
                    setNumber(3)
                    return;
                }
                setCount(4)
                break;
        }
    }

    const forms = () => {
        switch (count) {
            case 1:
                return <FormStep1
                    state={state}
                    handleOnChange={handleOnChange}
                    number={number}
                />
            case 2:
                return <RegisterFormStep2
                    state = {state}
                    handleOnChange = {handleOnChange}
                    number = {number}
                />
            case 3:
                return <RegFormStep3
                    state = {state}
                    handleOnChange = {handleOnChange}
                    number = {number}
                />
            case 4:
                setFinish(true);
                break;
        }
    }

    const stepBack = ()=> {
        if (count !== 1)
            setCount(count => count - 1)
    }


    return (
        <div className='forms'>
            <div className='forms__heading'>
                <h3>Wizard Form</h3>
                <p>Use this elements, if you want to show some hints or additional information</p>
            </div>
            <div className='forms__block'>
                <div className='forms__block__steps'>
                    <div className={count === 1 ?'forms__block__stepActive' : ''}>
                        <p>STEP 1</p>
                    </div>
                    <div className={count === 2 ?'forms__block__stepActive' : ''}>
                        <p>STEP 2</p>
                    </div>
                    <div className={count === 3 ?'forms__block__stepActive' : ''}>
                        <p>STEP 3</p>
                    </div>
                </div>
                { forms() }
                <div className='forms__block__buttons'>
                    <button onClick={stepBack} disabled={count === 1} type='button'>Back</button>
                    <button onClick={inputCheckStep1} type='button'>Next</button>
                </div>
            </div>
        </div>
    )
}

export default Register;