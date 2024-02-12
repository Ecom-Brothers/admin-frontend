import { useState } from 'react'
import UISetting from '../../UISetting'
import styles from './styles.module.css'
import { parseJsonData } from '../../utils/functions'

const TextField = ({changeContent,text,content,setContent,jsonData})=>{
    const [showSettings,setShowSettings] = useState(false)
    return (
        <div>
        <div className={styles.parent} >
           <input type="text" className={styles.input} onChange={(e)=>changeContent(e,text.id,'update')} value={text.value} placeholder='Enter text here'/>
           <select onChange={(e)=>changeContent(e,text.id,'update_source')} value={text.source} >
                {
                    Object.keys(parseJsonData(jsonData)||{}).map((option)=>(
                        <option>{option}</option>
                    ))
                }
           </select>
           <div className={styles.button_collector}>
            <button onClick={(e)=>changeContent(e,text.id,'up')}><i class="fa fa-angle-double-up"></i></button>
            <button onClick={(e)=>changeContent(e,text.id,'down')}><i class="fa fa-angle-double-down"></i></button>
            <button onClick={(e)=>changeContent(e,text.id,'remove')}><i class="fa fa-trash-o" style={{color:"red"}}></i></button>
            <button onClick={(()=>setShowSettings(!showSettings))}><i class="fa fa-gear"></i></button>
           </div>
        </div>
        {
            showSettings && <UISetting content={content} setContent={setContent} id={text.id}/>
        }
        </div>
    )
}

export default TextField