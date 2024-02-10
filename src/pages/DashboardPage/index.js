import { useState } from 'react'
import styles from './styles.module.css'
import globalStyles from '../Components/Layout/styles.module.css'

const DashboardPage = () => 
{

  const [componentStyle ,setComponentStyle] = useState(
    {
      width:'100px',
      height:'200px',
      backgroundColor:'red'
    })


  const changeUiSetting = (e,type)=>{
    setComponentStyle((prev)=>({...prev,[type]:e.target.value}))
  }

 return (
  <div className={styles.dashboard}>
      <div className={styles.component_ui}>
        <div style={componentStyle}>
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
         <div className={globalStyles.label}> Border Radius </div>
         <input type="text" className={globalStyles.input} onChange={(e)=>changeUiSetting(e,'borderRadius')} value={componentStyle.borderRadius}/>
        </div>

      </div>

  </div>
)
}

export default DashboardPage
