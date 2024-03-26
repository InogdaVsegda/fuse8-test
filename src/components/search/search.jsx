import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getJokes } from '../../redux/actions/search'
import styles from './search.module.css';
import { CLEAR_JOKES } from '../../redux/actions/searchTypes';

function SearchBar() {
    const dispatch = useDispatch()

    const [query, setQuery] = React.useState('')
    const { total } = useSelector((state) => state.search.jokes)
    
    const totalNumber = total?.toString()

    useEffect(() => {
        if (query.length >= 3) {
            dispatch(getJokes(query))
        } else {
            dispatch({type: CLEAR_JOKES})
        }
    }, [query.length])

    return (
        <div className={styles.searchbar}>
            <input 
                className={styles.input}
                type={'text'}
                placeholder={'Search jokes...'}
                onChange={e => setQuery(e.target.value)}
                name={'search'}
                id={'search'}
                autoFocus 
            />
            
            {
                totalNumber && query.length >=3 &&
                <label 
                    htmlFor='search' 
                    className={styles.label}>
                    Found jokes: {totalNumber}
                </label>
            }
        </div>
    )
}

export default SearchBar;