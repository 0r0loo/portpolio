import {ButtonHTMLAttributes, PropsWithChildren} from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{

}

function Button ({children, ...rest}:PropsWithChildren<ButtonProps>) {
    return <button className={'bg-pink-500 text-7xl'} {...rest}>{children}</button>
}

export default Button