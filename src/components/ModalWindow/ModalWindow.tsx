import {createPortal} from 'react-dom'
import styles from './ModalWindow.module.scss'
import Input from "../Input/Input.tsx";
import Button from "../Button/Button.tsx";
import { useState} from "react";
import {close} from "../../store/slices/isModalOpenSlice.ts";
import {useDispatch} from "react-redux";
import type {AppDispatch} from "../../store/store.ts";
const ModalWindow = () => {

    const dispatch = useDispatch<AppDispatch>();
    const [selectorOpen, setSelectorOpen] = useState<boolean>(false)
    const [whatSelect, setWhatSelect] = useState<string>('Выбрать')
    let groups: string [] = ['Прохожий', 'Клиент', 'Партнер']
    const handleClick = () => {
        setSelectorOpen(prev => !prev)
    }

    return createPortal(
        <div className={styles.modalContainer}>
            <div className={styles.modal}>
                <form className={styles.form}>
                    <div className={styles.formItem}>
                        <label>ФИО</label>
                        <Input form={true}/>
                    </div>
                    <div className={styles.formItem} style={{marginBottom: '17px'}}>
                        <label>Компания</label>
                        <Input form={true}/>
                    </div>
                    <div className={styles.formItem} style={{marginBottom: '29px'}}>
                        <label>Группа</label>
                        <div className={styles.selectGroup}>
                            <div className={`${styles.selected} ${selectorOpen ? styles.active : ''}`} onClick={() => {handleClick(); setWhatSelect('Выбрать')}}>
                                <p>{whatSelect}</p>
                                <img src='/icons/arrowDownIco.svg' draggable='false' width='10' height='5'/>
                            </div>
                            <div className={`${styles.selectVariant} ${selectorOpen ? styles.active : ''}`}>
                                {groups?.map((gr) => (
                                    <p key={gr} onClick={(e: React.MouseEvent<HTMLParagraphElement>)=> {
                                        setWhatSelect(e.currentTarget.textContent);
                                        handleClick()
                                    }}>
                                        {gr}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className={styles.formItem}>
                        <label>Присутствие</label>
                        <div className={styles.inputCheckBox}>
                            <input type="checkbox"/>
                        </div>
                    </div>
                </form>
                <div className={styles.buttons}>
                    <Button buttonText={'Добавить'} form={true}/>
                    <Button buttonText={'Закрыть'} bgColor={'gray'} form={true} onClick={()=>{dispatch(close())}}/>
                </div>
            </div>
        </div>,
        document.getElementById('modal')!
    )
}

export default ModalWindow