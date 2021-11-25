import React, {FC} from 'react';
import './style.scss'
import {NavLink} from "react-router-dom";
import music_logo from '../../assets/music_logo.png'
import Button from "../Buttons/Button";
import {button_display_types} from "../Buttons/types";
import Modal from "../Modal/Modal";
import LoginForm from "../Forms/LoginForm/LoginForm";
import useAction from "../../hooks/useAction";
import {useTypedSelector} from "../../hooks/useTypedSelector";

interface INavProps {
    isAuth: boolean,
    user: string
}

const TopNavigation:FC<INavProps> = ({isAuth, user}) => {

    // const [loginModalOpen, setLoginModalOpen] = useState(false)
    const {setIsAuth, setModalOpen} = useAction()
    const authState = useTypedSelector(state => state.auth)

    return (
        <>
            <nav className={'topNavigation'}>
                <NavLink to={'/'} className={'topNavigation__item'}>
                    <img src={music_logo} alt={"Логотип"}/>
                </NavLink>
                <div className="topNavigation__item">
                    <div className="btns">
                        {isAuth ?
                            <Button display_type={button_display_types.dotted}
                            action={() => setIsAuth(false)}>
                                {user}
                            </Button>
                            :
                            <Button display_type={button_display_types.dotted} action={
                                () => {setModalOpen(true)}
                            }>Вход</Button>
                        }
                    </div>
                </div>
            </nav>

            {authState.isLoginOpen && (
                <Modal title={"Укажите ваши данные для входа"} setVisible={() => {
                    setModalOpen(!authState.isLoginOpen)
                }}>
                    <LoginForm isFetching={authState.isFetching}/>
                </Modal>)}

        </>
    );
};

export default TopNavigation;