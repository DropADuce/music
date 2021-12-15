import React, { FC, useEffect, useMemo, useState } from 'react';
import LoginForm from '../Forms/LoginForm/LoginForm';
import { SelectedModal } from './TopNavigation';
import Modal from '../Modal/Modal';
import { SetModalVisible } from '../Modal/types';
import RegisterForm from '../Forms/RegesterForm/RegisterForm';

interface IProps {
  isFetching: boolean
  selectedModal: string
  setVisible: SetModalVisible
}

type SetModalTitle = React.Dispatch<React.SetStateAction<string>>

const currentFormHandler = (selectedModel: string, setModalTitle: SetModalTitle) => {
  switch (selectedModel) {
    case SelectedModal.LOGIN_MODAL: {
      setModalTitle('Введите данные для входа')
      return LoginForm
    }
    case SelectedModal.REGISTER_MODAL: {
      setModalTitle('Введите данные для регистрации')
      return RegisterForm
    }
    default: return LoginForm;
  }
}

const FormContainer:FC<IProps> = ({ isFetching , selectedModal, setVisible}) => {
  const [modalTitle, setModalTitle] = useState('')
  const CurrentForm = useMemo(() => currentFormHandler(selectedModal, setModalTitle), [selectedModal])

  return (
    <Modal title={modalTitle} setVisible={setVisible}>
      <CurrentForm isFetching={isFetching} />
    </Modal>
  );
};

export default FormContainer;