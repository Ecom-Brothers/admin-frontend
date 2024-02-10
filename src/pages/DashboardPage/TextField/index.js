import { useState } from 'react'
import UISetting from '../UISetting'
import styles from './styles.module.css'

const TextField = ({changeContent,text,content,setContent})=>{
    const [showSettings,setShowSettings] = useState(false)
    return (
        <div>
        <div className={styles.parent} onClick={(()=>setShowSettings(!showSettings))}>
           <input type="text" className={styles.input} onChange={(e)=>changeContent(e,text.id,'update')} value={text.value} placeholder='Enter text here'/>
           <button onClick={(e)=>changeContent(e,text.id,'remove')}>Delete</button>
           <button onClick={(e)=>changeContent(e,text.id,'up')}>UP</button>
           <button onClick={(e)=>changeContent(e,text.id,'down')}>Down</button>
        </div>
        {
            showSettings && <UISetting content={content} setContent={setContent} id={text.id}/>
        }
        </div>
    )
}

export default TextField