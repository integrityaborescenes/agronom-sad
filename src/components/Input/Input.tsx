import styles from './Input.module.scss'

type Props = {
    placeholder?: string
    margin?: boolean
}

const Input = ({placeholder, margin}:Props) => {
    return (
        <div className={`
        ${styles.input}
        ${margin ? styles.margin : ''}
        `}>
            <input type='text' placeholder={placeholder}/>
        </div>
    )
}

export default Input