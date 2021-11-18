import React, {FC} from 'react';
import {button_types} from "./types";
import './style.scss'

interface IButton {
    type?: button_types
}

const getClassName: (type: button_types | undefined) => string = (type) => {
    let defaultClassName = 'btns__btn'
    if (type) {
        if (type === button_types.dotted) {
            defaultClassName = defaultClassName + ' ' + defaultClassName + '_dotted'
        }
    }
    return defaultClassName
}

const Button:FC<IButton> = ({children, ...props}) => {
    return (
        <div className={getClassName(props.type)}>
            {children}
        </div>
    );
};

export default Button;