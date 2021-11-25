import React, {FC} from 'react';
import {button_display_types, button_types} from "./types";
import './style.scss'

interface IButton {
    display_type?: button_display_types;
    type?: button_types;
    action: () => void,
    disabled?: boolean
}

const getClassName: (type: button_display_types | undefined) => string = (type) => {
    let defaultClassName = 'btns__btn'
    if (type) {
        defaultClassName = `${defaultClassName} ${defaultClassName}_${type}`
    }
    return defaultClassName
}

const Button: FC<IButton> = ({children, ...props}) => {
    return (
        <button onClick={e => {
            e.stopPropagation()
            props.action()
        }}
                disabled={props.disabled || false}
                className={getClassName(props.display_type)}
                type={props.type || undefined}>
            {children}
        </button>
    );
};

export default Button;