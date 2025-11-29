import Input from "../Input/Input.tsx";
import Button from "../Button/Button.tsx";
import {useDispatch, useSelector} from "react-redux";
import styles from './Header.module.scss'
import type {AppDispatch, RootState} from "../../store/store.ts";
import { open } from "../../store/slices/isModalOpenSlice.ts";


const Header = () => {
    const counterAbsent = useSelector((state: RootState) => state.visitors.visitors.filter(absent => absent.present).length);
    const counterPresent = useSelector((state: RootState) => state.visitors.visitors.filter(absent => !absent.present).length);
    const inputValue = useSelector((state: RootState) => state.input.inputText);
    const dispatch = useDispatch<AppDispatch>();

    return (
        <div className={styles.header}>
            <div className={styles.headerLeft}>
                <img src="/images/logo.svg" width='188' height='90' loading='lazy' draggable={false}/>
                <Input placeholder={'Поиск по имени'} margin={true} value={inputValue}/>
                <Button buttonText={'Добавить'} onClick={()=>{dispatch(open())}}/>
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