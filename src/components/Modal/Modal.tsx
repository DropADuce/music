import React, { FC } from 'react';
import './style.scss';
import { SetModalVisible } from './types';

interface IModal {
  title: string,
  setVisible: SetModalVisible
}

const Modal: FC<IModal> = ({ title, setVisible, children }) => {
  return (
    <div className={'modal'} onClick={_ => setVisible(prev => !prev)}>
      <div className={'modal__window modalWindow'} onClick={(e: React.MouseEvent<HTMLElement>) => e.stopPropagation()}>
        <h1>{title}</h1>
        {children}
      </div>
    </div>
  );
};

export default Modal;