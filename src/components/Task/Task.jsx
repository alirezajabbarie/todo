import React,{useEffect,useState} from 'react';
import styles from './Task.module.scss'
import {RiCloseFill} from 'react-icons/ri'
import useTheme from '../../hook/useTheme'

const Task = () => {

    const {data,setData,status}=useTheme()
    const [items,setItems]=useState([])

    const checkHandler=(id)=>{
        setData(prev=>{
            const old=[...prev]
            const newArr=old.map(item=>{
                if (item.id === id) {
                    return {...item, completed: !item.completed};
                  }
                  return item;
            })
            return newArr
        })
    }

    const removeHandler=(id)=>{
        setData(prev=>{
            const oldArr=[...prev]
            const newArr=oldArr.filter(item=>item.id!==id)
            return newArr
        })
    }

    useEffect(()=>{
        if(status==='all'){
            setItems(data)
        }else{
            const oldArr=[...data]
            const newArr=oldArr.filter(item=>item.completed===false)
            setItems(newArr)
        }
    },[status,data])

    return (
        <div className={styles.taskBox}>
            <div className={styles.header}>
                What needs to be done ?
            </div>
            {items.length ? (
                items.map((item,index)=>(
                <div key={index} className={`${styles.item} ${item.completed && styles.completed}`}>
                    <div className={styles.left}>
                        <input type="checkbox" className={styles.check} onChange={()=>checkHandler(item.id)} checked={item.completed ? true:false} />
                        <span className={styles.title}>{item.title}</span>
                    </div>
                    <div className={styles.right}>
                        <span className={styles.close} onClick={()=>removeHandler(item.id)}><RiCloseFill/></span>
                    </div>
                </div>
                ))

            ):(
                <div className={styles.empty}>
                    <span>There is no data for show!</span>
                </div>
            )}
        </div>
    );
}

export default Task;
