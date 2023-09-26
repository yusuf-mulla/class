import React,{useEffect, useRef, useState} from 'react'

export const UseRef2 = () => {
    const dataref=useRef("")
    const [listdata,setListdata]=useState([])

    

    const handleAdd=(value)=>{
        if (!dataref.current.value.trim(value))return
        setListdata([...listdata,dataref.current.value])
        dataref.current.focus()
        dataref.current.value=""
    }
    useEffect(()=>{
        dataref.current.focus()
    },[])
  return (
    <div>

        <input type="text" ref={dataref} />
        <button onClick={()=>handleAdd()}>Add me</button>

            <ol>
            {listdata.map((item,index)=>{
                    return(
                        <li key={index}>{item}</li>
                    )
            })}
        </ol>

    </div>
  )
}
