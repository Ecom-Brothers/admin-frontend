import styles from './styles.module.css'
import { HexColorPicker } from "react-colorful"

const UISetting = ({content,setContent,id})=>{

    const changeUiSetting = (value,type)=>{
        setContent((prev)=>{
          return prev?.map((item)=>(item?.id===id?{...item,componentStyle:{...item.componentStyle,[type]:value}}:item))
        })
        console.log(content)        
      }
    
    return (
        <div className={styles.flex}>
                <div>
                <div className={styles.label}> Width: </div>
                  <input type="text" className={styles.input} onChange={(e)=>changeUiSetting(e.target.value,'width')}  value={content?.[id]?.componentStyle?.width}/>
                </div>
                <div>
                <div className={styles.label}> Height: </div>
                <input type="text" className={styles.input} onChange={(e)=>changeUiSetting(e.target.value,'height')} value={content?.[id]?.componentStyle?.height}/>
                </div>
                <div>
                <div className={styles.label}> Padding </div>
                <input type="text" className={styles.input} onChange={(e)=>changeUiSetting(e.target.value,'padding')} value={content?.[id]?.componentStyle?.padding}/>
                </div>
                <div>
                <div className={styles.label}> Font Size </div>
                <input type="text" className={styles.input} onChange={(e)=>changeUiSetting(e.target.value,'fontSize')} value={content?.[id]?.componentStyle?.fontSize}/>
                </div>
                <div>
                <div className={styles.label}> Border</div>
                <input type="text" className={styles.input} onChange={(e)=>changeUiSetting(e.target.value,'border')} value={content?.[id]?.componentStyle?.border}/>
                </div>
                <div>
                <div className={styles.label}> Border Radius </div>
                <input type="text" className={styles.input} onChange={(e)=>changeUiSetting(e.target.value,'borderRadius')} value={content?.[id]?.componentStyle?.borderRadius}/>
                </div>
                <div>
                <div className={styles.label}> Align Left </div>
                <input type="text" className={styles.input} onChange={(e)=>changeUiSetting(e.target.value,'textAlign')} value={content?.[id]?.componentStyle?.textAlign}/>
                </div>
                <div>
                <div className={styles.label}> Background Color: </div>
                  <HexColorPicker color={content?.[id]?.componentStyle?.backgroundColor} onChange={(e)=>changeUiSetting(e,'backgroundColor')} />
                </div>
                <div>
                  <div className={styles.label}> Font Color: </div>
                  <HexColorPicker color={content?.[id]?.componentStyle?.color} onChange={(e)=>changeUiSetting(e,'color')} />
                </div>                
        </div>
    )
}
export default UISetting