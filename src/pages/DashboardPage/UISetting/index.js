import globalStyles from '../../Components/Layout/styles.module.css'
const UISetting = ({content,setContent,id})=>{

    
    const changeUiSetting = (e,type)=>{
        // setComponentStyle((prev)=>({...prev,[type]:e.target.value}))
        setContent((prev)=>{
          return prev?.map((item)=>(item?.id===id?{...item,componentStyle:{...item.componentStyle,[type]:e.target.value}}:item))
        })
        console.log(content)
    
      }
    
    
    return (
        <>
            <div>
                <div className={globalStyles.label}> Width: </div>
                <input type="text" className={globalStyles.input} onChange={(e)=>changeUiSetting(e,'width')}  value={content?.[id]?.componentStyle?.width}/>
                </div>
                <div>
                <div className={globalStyles.label}> Height: </div>
                <input type="text" className={globalStyles.input} onChange={(e)=>changeUiSetting(e,'height')}value={content?.[id]?.componentStyle?.height}/>
                </div>
                <div>
                <div className={globalStyles.label}> Background Color: </div>
                <input type="text" className={globalStyles.input} onChange={(e)=>changeUiSetting(e,'backgroundColor')} value={content?.[id]?.componentStyle?.backgroundColor}/>
                </div>
                <div>
                <div className={globalStyles.label}> Padding </div>
                <input type="text" className={globalStyles.input} onChange={(e)=>changeUiSetting(e,'padding')} value={content?.[id]?.componentStyle?.padding}/>
                </div>
                <div>
                <div className={globalStyles.label}> Font Size </div>
                <input type="text" className={globalStyles.input} onChange={(e)=>changeUiSetting(e,'fontSize')} value={content?.[id]?.componentStyle?.fontSize}/>
                </div>
                <div>
                <div className={globalStyles.label}> Border</div>
                <input type="text" className={globalStyles.input} onChange={(e)=>changeUiSetting(e,'border')} value={content?.[id]?.componentStyle?.border}/>
                </div>
                <div>
                <div className={globalStyles.label}> Border Radius </div>
                <input type="text" className={globalStyles.input} onChange={(e)=>changeUiSetting(e,'borderRadius')} value={content?.[id]?.componentStyle?.borderRadius}/>
                </div>

        </>
    )
}
export default UISetting