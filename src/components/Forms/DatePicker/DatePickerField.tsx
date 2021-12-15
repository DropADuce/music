import React, { FC } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

// type onChangeType = React.Dispatch<React.SetStateAction<string>>

interface Props {
  name: string
  value: Date
  onChange: any // Пока не знаю, как типизировать этот onChange
  onTouched: any
}

const DatePickerField: FC<Props> = ({ name, value, onChange, onTouched }) => {
  return (
    <DatePicker
      selected={(value && new Date(value)) || null}
      onChange={val => onChange(name, val)}
      onChangeRaw={() => onTouched(name, true, true)}
    />
  );
};

export default DatePickerField;