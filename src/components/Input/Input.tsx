import styles from './Input.module.scss'
import {useDispatch} from "react-redux";
import type {AppDispatch} from "../../store/store.ts";
import * as React from "react";
import {input} from "../../store/slices/inputSlice.ts";

type Props = {
    placeholder?: string
    margin?: boolean
    form?:true
}

const Input = ({placeholder, margin,form}:Props) => {
    const dispatch = useDispatch<AppDispatch>();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (form !== true) {
            dispatch(input(e.target.value))
        }
    }
    return (
        <div className={`
        ${styles.input}
        ${margin ? styles.margin : ''}
        ${form ? styles.formInput : ''}
        `}>
            <input type='text' placeholder={placeholder} onChange={handleChange}/>
        </div>
    )
}

export default Input