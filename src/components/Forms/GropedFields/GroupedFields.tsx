import React, { FC, isValidElement, useState} from 'react';
import { CSSTransition } from 'react-transition-group';
import './style.scss';

interface IProps {
    groupName: string;
}

const GroupedFields: FC<IProps> = ({groupName, children}) => {

    const [isFocused, setFocused] = useState(false)
    const legendclassnames = `fieldset__legend${isFocused ? 'fieldset__legend_focused' : ''}`

    return (
        <fieldset className={'fieldset'} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}>
            <CSSTransition in={isFocused} timeout={200} classNames={'animated-legend'}>
                <legend className={legendclassnames}>{groupName}</legend>
            </CSSTransition>
            <div className='row-container'>
                {React.Children.map(children, (child) => {
                    if (isValidElement(child)) {
                        return (<div className='row-container__item'>
                            {child}
                        </div>);
                    }
                })}
            </div>
        </fieldset>
    );
};

export default GroupedFields;