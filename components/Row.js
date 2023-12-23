import styles from './row.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Row = ({ children, justifyContent }) => {
  const rowClasses = cx({
    row: true,
    [`justify-content-${justifyContent}`]: justifyContent,
  });

  return <div className={rowClasses}>{children}</div>;
};

export default Row;
