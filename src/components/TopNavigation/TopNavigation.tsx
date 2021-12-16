import React, { FC, useState } from 'react';
import './style.scss';
import { NavLink } from 'react-router-dom';
import music_logo from '../../assets/music_logo.png';
import Button from '../Buttons/Button';
import { button_display_types } from '../Buttons/types';
import useAction from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import FormContainer from './FormContainer';

interface INavProps {
  isAuth: boolean,
  user: string
}

export enum SelectedModal {
  LOGIN_MODAL = 'LOGIN_MODAL',
  REGISTER_MODAL = 'REGISTER_MODAL'
}

const TopNavigation: FC<INavProps> = ({ isAuth, user }) => {

  const { setIsAuth, setModalOpen } = useAction();
  const [ currentModal, setCurrentModal ] = useState('')
  const authState = useTypedSelector(state => state.auth);

  return (
    <>
      <nav className={'topNavigation'}>
        <NavLink to={'/'} className={'topNavigation__item'}>
          <img src={music_logo} alt={'Логотип'} />
        </NavLink>
        <div className='topNavigation__item'>
          <div className='btns'>
            {isAuth ?
              <Button display_type={button_display_types.dotted}
                      action={() => setIsAuth(false)}>
                {user}
              </Button>
              :
              <>
                <Button display_type={button_display_types.dotted} action={
                  () => {
                    setModalOpen(true);
                    setCurrentModal(SelectedModal.LOGIN_MODAL)
                  }}>
                  Вход</Button>
                <Button display_type={button_display_types.dotted} action={
                  () => {
                    setModalOpen(true);
                    setCurrentModal(SelectedModal.REGISTER_MODAL)
                  }}>
                  Регистрация
                </Button>
              </>
            }
          </div>
        </div>
      </nav>

      {authState.isModalOpen && (
        <FormContainer isFetching={authState.isFetching}
                       selectedModal={currentModal}
                       setVisible={() => {
                         setModalOpen(!authState.isModalOpen);
                       }} />
      )}

      {/*{authState.isModalOpen && (*/}
      {/*  <Modal title={'Укажите ваши данные для входа'} setVisible={() => {*/}
      {/*    setModalOpen(!authState.isModalOpen);*/}
      {/*  }}>*/}
      {/*    <FormContainer isFetching={authState.isFetching}*/}
      {/*                   selectedModal={currentModal}*/}
      {/*    />*/}
      {/*  </Modal>)}*/}

    </>
  );
};

export default TopNavigation;