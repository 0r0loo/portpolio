import {ButtonHTMLAttributes} from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {

}

export default function Button({children, ...rest}: ButtonProps) {
    return <button {...rest}>{children}</button>
}
