import React, { useState } from 'react'
import styles from './button.module.css'

export default function Button(props){
    const [isOn, setIsON] = useState(false);
    return (
        <div class={isOn?isOn:styles.isOff}> onClick={()=>{
            alert("clicked");
            setIsON(!isOn);
        }}{props.name} is {props.age} years old and is{isOn?"On":"Off"}</div>
    )
}