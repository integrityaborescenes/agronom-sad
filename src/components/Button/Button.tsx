import styles from './Button.module.scss'

type Props = {
    buttonText: string
    bgColor?: string
}

const Button = ({buttonText, bgColor}:Props) => {
    return (
        <div className={`
        ${styles.button}
        ${bgColor === 'red' ? styles.red :
            bgColor === 'gray' ? styles.gray : styles.green}
        `}>
            <p>{buttonText}</p>
        </div>
    )
}

export default Button