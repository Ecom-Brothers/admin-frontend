import globalStyles from '../../Components/Layout/styles.module.css'

const ImageField = ({changeContent,text})=>{
    return (
        <input type="text" className={globalStyles.input} onChange={(e)=>changeContent(e,text.id)} value={text.value}/>
    )
}

export default ImageField