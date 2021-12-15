import React, { FC } from 'react';
import './style.scss';

interface IProps {
  groupName: string;
}

const GroupedFields: FC<IProps> = ({ groupName, children }) => {
  return (
    <fieldset className={'fieldset'}>
      <legend>{groupName}</legend>
      <div className='row-container'>
        {React.Children.map(children, (child) => {
          return (<div className='row-container__item'>
            {child}
          </div>);
        })}
      </div>
    </fieldset>
  );
};

export default GroupedFields;