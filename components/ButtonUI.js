import classnames from 'classnames/bind';

import Icon from './Icon';

import styles from './buttonui.module.scss';

let cx = classnames.bind(styles);

const ButtonUI = ({clickHandler,icon}) => {
    let btnClasses = cx({
        btnui: true,
        close:icon =='close'
        [`icon-${icon}`] : icon
    });
    return <button 
    scr={`/images/icons/${icon}.svg`}
    alt={`${icon}icon`}
    width={16}
    heigth={12}

        className={btnuiClasses}
        onClick={clickHandler}
    >
        <Icon icon={icon} />
    </button>
}
export default ButtonUI;