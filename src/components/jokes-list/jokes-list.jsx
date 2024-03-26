import React from 'react';
import { useSelector } from 'react-redux';
import JokeItem from '../joke-item/joke-item';
import styles from './jokes-list.module.css';
import { VirtuosoGrid } from 'react-virtuoso'
import { InfinitySpin } from 'react-loader-spinner'

function JokesList() {
    const { jokes, jokesLoading } = useSelector((state) => state.search)


    const itemRenderer = (index) => {
        const el = jokes.result[index]

        return (
            <JokeItem value={el.value} id={el.id} date={el.created_at} key={el.id} />
        );
      }

    return (
        <div className={styles.listWrapper}>
            {
                jokesLoading 
                    ? <div className={styles.listSpinner}>
                        <InfinitySpin />
                      </div>
                    : jokes && jokes.result?.length && 
                        <VirtuosoGrid
                            useWindowScroll
                            data={jokes.result}
                            totalCount={jokes.result.length}
                            itemContent={itemRenderer}
                            listClassName={styles.jokesList}
                            itemClassName={styles.jokeItem}
                            overscan={10}
                        />
            }
        </div>
    )
}

export default JokesList;