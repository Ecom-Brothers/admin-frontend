export const removeComponent = ({setContent,id})=>{
    setContent((prev)=>{
        return prev?.filter((item)=>(item?.id!==id))
      })     
}

export const upComponent = ({setContent,id})=>{
    setContent((prev)=>{
        const old = prev.map((item)=>item);
        for(let i = 1; i <old.length; i++)
        {
          console.log(old[i])
          if(old[i].id === id){
            const temp = old[i-1];
            old[i-1]= old[i];
            old[i] = temp
           break; 
          }
        }
        console.log(old)
        return old;        
      })
}

export const downComponent = ({setContent,id})=>{
    setContent((prev)=>{
        const old = prev.map((item)=>item);
        for(let i = 0; i <old.length-1; i++)
        {
          console.log(old[i])
          if(old[i].id === id){
            const temp = old[i+1];
            old[i+1]= old[i];
            old[i] = temp
           break; 
          }
        }
        return old;        
      })

}


export const parseJsonData =(data)=>{
  try{
    return JSON.parse(data)
  }
  catch(err){
    console.log(err)
    return {}
  }
}