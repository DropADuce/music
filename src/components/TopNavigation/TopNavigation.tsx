import React, {useState} from 'react';
import './style.scss'
import {NavLink} from "react-router-dom";
import music_logo from '../../assets/music_logo.png'
import Button from "../Buttons/Button";
import {button_display_types} from "../Buttons/types";
import Modal from "../Modal/Modal";
import LoginForm from "../Forms/LoginForm/LoginForm";

const TopNavigation = () => {

    const [loginModalOpen, setLoginModalOpen] = useState(false)

    return (
        <>
            <nav className={'topNavigation'}>
                <NavLink to={'/'} className={'topNavigation__item'}>
                    <img src={music_logo} alt={"Логотип"}/>
                </NavLink>
                <div className="topNavigation__item">
                    <div className="btns">
                        <Button display_type={button_display_types.dotted} action={
                            () => setLoginModalOpen(prev => !prev)
                        }>Вход</Button>
                    </div>
                </div>
            </nav>

            {loginModalOpen && (
                <Modal title={"Укажите ваши данные для входа"} setVisible={setLoginModalOpen}>
                    <LoginForm setVisible={setLoginModalOpen}/>
                </Modal>)}

        </>
    );
};

export default TopNavigation;