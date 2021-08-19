import React, {useState} from 'react';
import './Register.scss';
import FormStep1 from "./FormStep1/FormStep1";
import RegisterFormStep2 from "./FormStep2/FormStep2";
import RegFormStep3 from "./FormStep3/FormStep3";

const Register = () => {
    const [Name, setName] = useState('');
    const [Gmail, setGmail] = useState('');
    const [Url, setUrl] = useState('');
    const [Password, setPassword] = useState('');
    const [Select, setSelect] = useState('')
    const [CityName, setCityName] = useState('')
    const [StreetName, setStreetName] = useState('')
    const [Building, setBuilding] = useState('')
    const [ZIPCode, setZIPCode] = useState('')
    const [Change, setChange] = useState('')
    const [EMail, setEMail] = useState('')
    const [Phone, setPhone] = useState('')

    const [count, setCount] = useState(1)
    const [number, seNumber] = useState(0)




    const inputCheckStep1 = ()=> {
        if (count === 1){
            if (Name.length < 5 || Gmail.length<5 || Url.length<5 || Password.length < 5) {
                seNumber(1)
                return;
            }
            setCount(2)
        }
        if (count === 2) {
            if (Select.length < 5 || CityName.length <5 || StreetName.length <5 || Building.length < 5 || ZIPCode.length < 5) {
                seNumber(2)
                return;
            }
            setCount(3)
        }
        if (count === 3) {
            if (Change.length < 5 || EMail.length <5 || Phone.length <5 ) {
                seNumber(3)
                return;
            }
            setCount(3)
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

                {count === 1 ? <FormStep1
                    Name = {Name}
                    setName = {setName}
                    Gmail = {Gmail}
                    setGmail = {setGmail}
                    Url = {Url}
                    setUrl = {setUrl}
                    Password = {Password}
                    setPassword = {setPassword}
                    number = {number}
                /> : false}

                {count === 2 ? <RegisterFormStep2
                    Select = {Select}
                    setSelect = {setSelect}
                    CityName = {CityName}
                    setCityName = {setCityName}
                    StreetName = {StreetName}
                    setStreetName = {setStreetName}
                    Building = {Building}
                    setBuilding = {setBuilding}
                    ZIPCode = {ZIPCode}
                    setZIPCode = {setZIPCode}
                    number = {number}
                /> : false}

                {count === 3 ? <RegFormStep3
                    Change = {Change}
                    setChange = {setChange}
                    EMail = {EMail}
                    setEMail = {setEMail}
                    Phone = {Phone}
                    setPhone = {setPhone}
                    number = {number}
                /> : false}
                <div className='forms__block__buttons'>
                    <button onClick={stepBack} disabled={count === 1} type='button'>Back</button>
                    <button onClick={inputCheckStep1} type='button'>Next</button>
                </div>
            </div>
        </div>
    )
}

export default Register;