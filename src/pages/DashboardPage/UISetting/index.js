import globalStyles from '../../Components/Layout/styles.module.css'
import { HexColorPicker } from "react-colorful";

const UISetting = ({content,setContent,id})=>{

    
    const changeUiSetting = (value,type)=>{
        setContent((prev)=>{
          return prev?.map((item)=>(item?.id===id?{...item,componentStyle:{...item.componentStyle,[type]:value}}:item))
        })
        console.log(content)
    
      }
    
    
    return (
        <>
            <div>
                <div className={globalStyles.label}> Width: </div>
                <input type="text" className={globalStyles.input} onChange={(e)=>changeUiSetting(e.target.value,'width')}  value={content?.[id]?.componentStyle?.width}/>
                </div>
                <div>
                <div className={globalStyles.label}> Height: </div>
                <input type="text" className={globalStyles.input} onChange={(e)=>changeUiSetting(e.target.value,'height')} value={content?.[id]?.componentStyle?.height}/>
                </div>
                <div>
                <div className={globalStyles.label}> Background Color: </div>
                  <HexColorPicker color={content?.[id]?.componentStyle?.backgroundColor} onChange={(e)=>changeUiSetting(e,'backgroundColor')} />
                </div>
                <div>
                  <div className={globalStyles.label}> Font Color: </div>
                  <HexColorPicker color={content?.[id]?.componentStyle?.color} onChange={(e)=>changeUiSetting(e,'color')} />
                </div>                
                <div>
                <div className={globalStyles.label}> Padding </div>
                <input type="text" className={globalStyles.input} onChange={(e)=>changeUiSetting(e.target.value,'padding')} value={content?.[id]?.componentStyle?.padding}/>
                </div>
                <div>
                <div className={globalStyles.label}> Font Size </div>
                <input type="text" className={globalStyles.input} onChange={(e)=>changeUiSetting(e.target.value,'fontSize')} value={content?.[id]?.componentStyle?.fontSize}/>
                </div>
                <div>
                <div className={globalStyles.label}> Border</div>
                <input type="text" className={globalStyles.input} onChange={(e)=>changeUiSetting(e.target.value,'border')} value={content?.[id]?.componentStyle?.border}/>
                </div>
                <div>
                <div className={globalStyles.label}> Border Radius </div>
                <input type="text" className={globalStyles.input} onChange={(e)=>changeUiSetting(e.target.value,'borderRadius')} value={content?.[id]?.componentStyle?.borderRadius}/>
                </div>

        </>
    )
}
export default UISetting