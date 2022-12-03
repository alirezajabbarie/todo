import React,{useEffect,useState} from 'react';
import styles from './Status.module.scss'
import useTheme from '../../hook/useTheme';

const Status = () => {

    const {data,setData,status,setStatus}=useTheme()
    const [leftItem,setLeftItem]=useState(0)


    useEffect(()=>{
        const list=data.filter(item=>{
            return item.completed===false
        })
        setLeftItem(list.length)
    },[data])


    


    const clearHandler=()=>{
        const oldArr=[...data]
        const newArr=oldArr.filter(item=>item.completed===false)
        setData(newArr)
    }

    return (
    <div className={styles.status}>
            <div className={styles.box}>
                <div className={styles.left}>
                    <span>{leftItem}</span>
                    <span className={styles.label}>item left</span>
                </div>
                <div className={styles.center}>
                    <span className={`${styles.btn} ${status==='all' && styles.active}`} onClick={()=>setStatus('all')}>All</span>
                    <span className={`${styles.btn} ${status==='active' && styles.active}`} onClick={()=>setStatus('active')}>Active</span>
                </div>
                <div className={styles.right}>
                    <button className={styles.btn} type="button" onClick={()=>clearHandler()}>Clear completed</button>
                </div>
            </div>  
        </div>
    );
}

export default Status;
