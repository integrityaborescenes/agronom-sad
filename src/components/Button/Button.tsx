import styles from './Button.module.scss'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    buttonText: string
    bgColor?: string
    onClick?: () => void
    type?: string
}

const Button = ({buttonText, bgColor, onClick, ...rest}:Props) => {


    return (
        <button {...rest} onClick={onClick} className={`
        ${styles.button}
        ${bgColor === 'red' ? styles.red :
            bgColor === 'gray' ? styles.gray : styles.green}
        `}>
            <p>{buttonText}</p>
        </button>
    )
}

export default Button