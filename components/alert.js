import styles from '../styles/alert.module.css'
import { clsx } from 'clsx';

export default function Alert({ children, type }) {
    // clsx helps you toggle classnames easily
    return (
        <div
            className={clsx({
                [styles.success]: type === 'success',
                [styles.error]: type === 'error',
            })}
        >
            {children}
        </div>
    );
}