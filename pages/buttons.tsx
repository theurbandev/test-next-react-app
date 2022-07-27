import type { NextPage } from 'next'
import { text } from 'stream/consumers';
import styles from '../styles/buttons.module.css'

interface ButtonProps{
    fontSize : string,
    text : string,
    backgroundColor? : string,
    textColor? : string,
    padding: string
};

export const Button = (props: ButtonProps) => {
    return (
        <button style={{backgroundColor : props.backgroundColor, color : props.textColor, fontSize : props.fontSize, padding : props.padding, width: "100%", margin : "5px 0px"}}>{props.text}</button>
    )
};

export default Button