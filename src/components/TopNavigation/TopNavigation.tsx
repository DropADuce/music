import React from 'react';
import './style.scss'
import {NavLink} from "react-router-dom";
import music_logo from '../../assets/music_logo.png'
import Button from "../Buttons/Button";
import {button_types} from "../Buttons/types";

const TopNavigation = () => {
    return (
        <nav className={'topNavigation'}>
            <NavLink to={'/'} className={'topNavigation__item'}>
                <img src={music_logo} alt={"Логотип"}/>
            </NavLink>
            <div className="topNavigation__item">
                <div className="btns">
                    <Button type={button_types.dotted}>Вход</Button>
                    <Button type={button_types.dotted}>Регистрация</Button>
                </div>
            </div>
        </nav>
    );
};

export default TopNavigation;