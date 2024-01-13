import classnames from 'classnames/bind';
import { scroller } from 'react-scroll';
import styles from './button.module.scss';
import { Children } from 'react';

let cx = classnames.bind(styles);

const Button = ({ 
    label,
    type
}) => {
    let buttonClasses = cx({
        btn : true,
        primary : type === 'primary',
        secondary : type === 'secondary'
    });
    
    return <button className={buttonClasses}
    onClick={clickHandler}>
       {Children} 
    </button>
}
export default Button;