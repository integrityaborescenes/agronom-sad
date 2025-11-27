import styles from './Button.module.scss'

type Props = {
    buttonText: string
    bgColor?: string
    form?: boolean
    onClick?: () => void
}

const Button = ({buttonText, bgColor, onClick}:Props) => {


    return (
        <div onClick={onClick} className={`
        ${styles.button}
        ${bgColor === 'red' ? styles.red :
            bgColor === 'gray' ? styles.gray : styles.green}
        `}>
            <p>{buttonText}</p>
        </div>
    )
}

export default Button