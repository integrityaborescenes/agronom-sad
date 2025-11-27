import styles from './Input.module.scss'
import {useDispatch} from "react-redux";
import type {AppDispatch} from "../../store/store.ts";
import * as React from "react";
import {input} from "../../store/slices/inputSlice.ts";

type Props = {
    placeholder?: string
    margin?: boolean
}

const Input = ({placeholder, margin}:Props) => {
    const dispatch = useDispatch<AppDispatch>();
    return (
        <div className={`
        ${styles.input}
        ${margin ? styles.margin : ''}
        `}>
            <input type='text' placeholder={placeholder} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {dispatch(input(e.target.value))}}/>
        </div>
    )
}

export default Input