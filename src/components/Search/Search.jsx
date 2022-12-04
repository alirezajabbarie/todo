import styles from './Search.module.scss'
import React,{useState} from 'react';
import useTheme from '../../hook/useTheme';

const Search = () => {

    const [title,setTitle]=useState('')
    const {setData,lastId,setLastId}=useTheme()

    const submitHandler=(e)=>{
        e.preventDefault()
        if(title !==''){
            setData(prev=>{
                return [...prev,{
                    id:lastId,
                    title:title,
                    completed:false
                }]
            })
            setLastId(prev=>{
                console.log(prev)
                return prev+1   
                }
            )
        }
        setTitle('')
    }


    return (
        <div className={styles.searchBox}>
              <div className={styles.header}>
                  <h3>TO DO List</h3>
              </div>
              <form className={styles.input} onSubmit={(e)=>submitHandler(e)}>
                    <input className={styles.text} type="text" placeholder='Title...' value={title} onChange={e=>setTitle(e.target.value)} />
                    <input className={styles.btn} type='Submit' value='Submit'/>
              </form>
          </div>
    );
}

export default Search;
