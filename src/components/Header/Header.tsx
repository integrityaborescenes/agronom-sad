import Input from "../Input/Input.tsx";
import Button from "../Button/Button.tsx";
import { useSelector } from "react-redux";
import styles from './Header.module.scss'
import type {RootState} from "../../store/store.ts";

const Header = () => {
    const counterAbsent = useSelector((state: RootState) => state.visitors.visitors.filter(absent => absent.present).length);
    const counterPresent = useSelector((state: RootState) => state.visitors.visitors.filter(absent => !absent.present).length);

    return (
        <div className={styles.header}>
            <div className={styles.headerLeft}>
                <img src="/images/logo.svg" width='188' height='90' loading='lazy'/>
                <Input placeholder={'Поиск по имени'} margin={true} />
                <Button buttonText={'Добавить'}/>
            </div>
            <div className={styles.visitors}>
                <h2>Посетители</h2>
                <div className={styles.visitorsCount}>
                    <p>
                        <span style={{color: 'var(--color-light-green)', marginRight: '4px'}}>{counterAbsent}</span>
                            /
                        <span style={{color: 'var(--color-red)'}}>{counterPresent}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Header