import React from 'react';
import './Navbar.scss'
import logo from "../../img/Logo.png"
import icon1 from "../../img/icon-1.png"
import icon2 from "../../img/icon-2.png"
import icon3 from "../../img/icon-3.png"
import icon4 from "../../img/icon-4.png"
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className='navigator'>
            <div className='navbar'>
                <div className='navbar__img'>
                    <img src="https://previews.aspirity.com/easydev/img/burger.svg" alt="icon1"/>
                    <NavLink to="/">
                        <img src={logo} alt="icon1" className='navbar__img__menu'/>
                    </NavLink>
                </div>
                <div className='navbar__items'>
                    <div className='navbar__item'>
                        <img src={icon1} alt="icon3"/>
                        <NavLink className='navbar__item__link' to="/register">Аккредитация и квалификация</NavLink>
                    </div>
                    <div className='navbar__item'>
                        <img src={icon2} alt="icon4"/>
                        <NavLink className='navbar__item__link' to="/navigator">Модерация проектов</NavLink>
                    </div>
                    <div className='navbar__item'>
                        <img src={icon3} alt="icon5"/>
                        <NavLink className='navbar__item__link' to="/">Лента проектов</NavLink>
                    </div>
                    <div className='navbar__item'>
                        <img src={icon4} alt="icon6"/>
                        <NavLink className='navbar__item__link' to="/">Реестры</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;