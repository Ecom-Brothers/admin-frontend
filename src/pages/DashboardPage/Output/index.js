import { parseJsonData } from '../utils/functions';
import styles from './styles.module.css'
const Output = ({componentStyle,content,jsonData})=> {
    return <>
        <div style={componentStyle}>
            {
                content.map((item)=>{
                    console.log(item.componentStyle)
                return <div>
                        {{
                        'text': <div style={item.componentStyle}> {item.value} {parseJsonData(jsonData)?.[item?.source]}</div>,
                        'image':<div> <img src ={item.value}  style={{width:'100%'}}/></div>,
                        'link': <button className={styles.link_button} style={item.componentStyle} href={item.href}><a>{item.value}</a></button>
                        }[item.type]}
                    </div>
                })
            }
            </div>                
    </>
}

export default Output;