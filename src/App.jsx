import styles from './App.module.css';
import SearchBar from './components/search/search';
import JokesList from './components/jokes-list/jokes-list';

function App() {
  return (
    <div className={styles.container}>
        <SearchBar/>
        
        <JokesList/>
    </div>
  );
}

export default App;
