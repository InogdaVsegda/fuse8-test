import styles from './joke-item.module.css';
import jokesURL from '../../services/api';
import { memo } from 'react';

const JokeItem = memo((props) => {
    const date = props.date.slice(0, 10)

    return (
        <a className={styles.jokeItem} href={`${jokesURL}/${props.id}`} target="_blank">
            <h2 className={styles.joke}>{props.value}</h2>
            <div className={styles.info}>
                <p className={styles.infoId}>{props.id}</p>
                <p className={styles.infoDate}>{date}</p>
            </div>
        </a>
    )
})

export default JokeItem;