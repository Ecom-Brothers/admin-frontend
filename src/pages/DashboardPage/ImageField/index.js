import styles from '../TextField/styles.module.css'

const ImageField = ({changeContent,text})=>{
    return (
        <div className={styles.parent}>
            Image
           <input type="text" className={styles.input} onChange={(e)=>changeContent(e,text.id,'update')} value={text.value} placeholder='Enter Image Url'/>
           <button onClick={(e)=>changeContent(e,text.id,'remove')}>Delete</button>
           <button onClick={(e)=>changeContent(e,text.id,'up')}>UP</button>
           <button onClick={(e)=>changeContent(e,text.id,'down')}>Down</button>
        </div>
    )
}

export default ImageField