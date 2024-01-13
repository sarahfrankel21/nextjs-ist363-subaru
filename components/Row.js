import styles from './row.module.scss';
import classnames from 'classnames/bind';

const cx= classnames.bind(styles);
const Row=({children, justifiyContent})=>{
    const rowClasses= cx ({
        row:true,
        [`justify-content-${justifiyContent}`] : justifiyContent
    });

    return <div className={rowClasses}>{children}</div>}

    export default Row;


