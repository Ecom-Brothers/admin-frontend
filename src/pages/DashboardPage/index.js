import { useState } from 'react'
import styles from './styles.module.css'
import globalStyles from '../Components/Layout/styles.module.css'
import TextField from './TextField'
import ImageField from './ImageField'

const DashboardPage = () => 
{

  const [componentStyle ,setComponentStyle] = useState(
    {
      width:'400px',
      height:'600px',
      backgroundColor:'#dddddd',
      borderRadius:'4px',
      padding:'10px'
    })
  
  const [content,setContent] = useState([])

  const changeUiSetting = (e,type)=>{
    setComponentStyle((prev)=>({...prev,[type]:e.target.value}))
  }

  const changeContent = (e,id)=>{
    setContent((prev)=>{
      return prev?.map((item)=>(item?.id===id?{...item,value:e.target.value}:item))
    })
  }

  const addText = ()=>{
    setContent((prev)=>
    (
      [...prev,{id:content.length,type:'text',value:'Enter text here...'}]
    ))
    }

  const addImage = ()=>{
      setContent((prev)=>
      (
        [...prev,{id:content.length,type:'image',value:'Enter Image Url here...'}]
      ))
      }
  

 return (
  <div className={styles.dashboard}>
      <div className={styles.component_ui}>
        <div style={componentStyle}>
          {
            content.map((item)=>{
              return <div>
                    {{
                      'text': item.value,
                      'image': <img src ={item.value}/>
                    }[item.type]}
                </div>
            })
          }
        </div>                
      </div>
      <div className={styles.component_ui_setting}>
        <div>
          <div className={globalStyles.label}> Width: </div>
          <input type="text" className={globalStyles.input} onChange={(e)=>changeUiSetting(e,'width')}  value={componentStyle.width}/>
        </div>
        <div>
         <div className={globalStyles.label}> Height: </div>
         <input type="text" className={globalStyles.input} onChange={(e)=>changeUiSetting(e,'height')} value={componentStyle.height}/>
        </div>
        <div>
         <div className={globalStyles.label}> Background Color: </div>
         <input type="text" className={globalStyles.input} onChange={(e)=>changeUiSetting(e,'backgroundColor')} value={componentStyle.backgroundColor}/>
        </div>
        <div>
         <div className={globalStyles.label}> Padding </div>
         <input type="text" className={globalStyles.input} onChange={(e)=>changeUiSetting(e,'padding')} value={componentStyle.padding}/>
        </div>
        <div>
         <div className={globalStyles.label}> Border Radius </div>
         <input type="text" className={globalStyles.input} onChange={(e)=>changeUiSetting(e,'borderRadius')} value={componentStyle.borderRadius}/>
        </div>
        <div>
          <div className={globalStyles.label}> Content </div>
          {
              content.map((item)=>(
               <>
                    {{
                      'text': <> Text <TextField text={item} changeContent={changeContent}/></>,
                      'image': <> Image Url <ImageField text={item} changeContent={changeContent}/></>,
                    }[item.type]}
               </>
              ))
          }
        </div>
        <button onClick={()=>addText()}>Add Text</button>
        <button onClick={()=>addImage()}>Add Image</button>

      </div>
  </div>
)
}

export default DashboardPage
