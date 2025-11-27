import Button from "../Button/Button.tsx";

import styles from './Header.module.scss'
import Input from "../Input/Input.tsx";

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.headerLeft}>
                <img src="/logo.svg" width='188' height='90' loading='lazy'/>
                <Input placeholder={'Поиск по имени'} margin={true}/>
                <Button buttonText={'Добавить'}/>
            </div>
            <div className={styles.visitors}>
                <h2>Посетители</h2>
                <div className={styles.visitorsCount}>
                    <p>
                        <span style={{color: 'var(--color-light-green)', marginRight: '4px'}}>280</span>
                            /
                        <span style={{color: 'var(--color-red)'}}>35</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Header