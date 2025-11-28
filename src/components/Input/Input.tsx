import styles from './Input.module.scss'
import {useDispatch} from "react-redux";
import type {AppDispatch} from "../../store/store.ts";
import * as React from "react";
import {input} from "../../store/slices/inputSlice.ts";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
    placeholder?: string
    margin?: boolean
    isForm?:true
}

const Input = ({placeholder, margin,isForm,...rest}:Props) => {
    const dispatch = useDispatch<AppDispatch>();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (isForm) {
        }
        else dispatch(input(e.target.value))
    }
    return (
        <div className={`
        ${styles.input}
        ${margin ? styles.margin : ''}
        ${isForm ? styles.formInput : ''}
        `}>
            <input type='text' placeholder={placeholder} onChange={handleChange} {...rest}/>
        </div>
    )
}

export default Input