import './assets/css/normalize.css'
import './assets/css/grid.css'
import Search from './components/Search/Search';
import Task from './components/Task/Task';
import styles from './App.module.scss'
import Status from './components/Status/Status';
import { useState } from 'react';

function App() {





  return (
    <div className={styles.main}>
      <div className={`container ${styles.box}`}>
        <Search/>
        <Task/>
        <Status/>
      </div>
    </div>
  );
}

export default App;
