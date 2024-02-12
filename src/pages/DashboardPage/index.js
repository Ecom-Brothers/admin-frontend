import { useState } from 'react'
import styles from './styles.module.css'
import globalStyles from '../Components/Layout/styles.module.css'
import TextField from './components/TextField'
import { downComponent, removeComponent, upComponent } from './utils/functions'

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

    const [selectedComponent,setSelectedComponent] = useState(0)
  
  const [content,setContent] = useState([])

  const changeContent = (e,id,changeType)=>{
    if(changeType === 'update')
    setContent((prev)=>{
      return prev?.map((item)=>(item?.id===id?{...item,value:e.target.value}:item))
    })
    
    if(changeType === 'remove')
    removeComponent({setContent,id})

    if(changeType === 'up'){
      upComponent({setContent,id})
    }
    if(changeType === 'down'){
      downComponent({setContent,id})
    }
  
  }



  const addText = ()=>{
    setContent((prev)=>
    (
      [...prev,{id:content.length,type:'text',value:'Text',componentStyle:{}}]
    ))
    }

  const addImage = ()=>{
      setContent((prev)=>
      (
        [...prev,{id:content.length,type:'image',value:'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg'}]
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
                      'text': <div style={item.componentStyle}> {item.value}</div>,
                      'image': <img src ={item.value}  style={{width:'100%',height:'100%'}}/>
                    }[item.type]}
                </div>
            })
          }
        </div>                
      </div>
      <div className={styles.component_ui_setting}>
        <div>
          {
              content.map((item)=>(
               <>
                    {{
                      'text':  <TextField text={item} changeContent={changeContent} selectedComponent={selectedComponent} setSelectedComponent={setSelectedComponent} content={content} setContent={setContent}/>,
                      'image':  <TextField text={item} changeContent={changeContent} selectedComponent={selectedComponent} setSelectedComponent={setSelectedComponent} content={content} setContent={setContent}/>,
                    }[item.type]}
               </>
              ))
          }
        </div>
        <div className={styles.button_collector}>
          <button className={styles.action_button} onClick={()=>addText()}>Add Text</button>
          <button className={styles.action_button} onClick={()=>addImage()}>Add Image</button>
        </div>

      </div>
  </div>
)
}

export default DashboardPage
