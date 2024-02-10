import styles from './styles.module.css'

const TextField = ({changeContent,text})=>{
    return (
        <div className={styles.parent}>
            Text
           <input type="text" className={styles.input} onChange={(e)=>changeContent(e,text.id,'update')} value={text.value} placeholder='Enter text here'/>
           <button onClick={(e)=>changeContent(e,text.id,'remove')}>Delete</button>
           <button onClick={()=>changeContent()}>UP</button>
           <button onClick={()=>changeContent()}>Down</button>

        </div>
    )
}

export default TextField