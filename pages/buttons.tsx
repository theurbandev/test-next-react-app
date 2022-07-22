import type { NextPage } from 'next'
import { text } from 'stream/consumers';

interface Props{
    text : string,
    backgroundColor? : string,
    textColor? : string
};

export const Button = (props: Props) => {
    return (
        <button style={{backgroundColor : props.backgroundColor, color : props.textColor}}>{props.text}</button>
    )
};

export default Button