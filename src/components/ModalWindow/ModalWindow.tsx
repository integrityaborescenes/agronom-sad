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
    const [isGroupSelectCorrect, setIsGroupSelectCorrect] = useState<string>('')
    let groups: string [] = ['Прохожий', 'Клиент', 'Партнер']
    const handleClick = () => {
        setSelectorOpen(prev => !prev)
    }


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        type userData = {
            fullName: string;
            company: string;
            group: string;
            presence: boolean;
        }

        if (whatSelect === 'Выбрать') {
            setIsGroupSelectCorrect('incorrect')

        } else {
            setIsGroupSelectCorrect('coorect')
            const form = e.currentTarget
            const formData = new FormData(form);
            const data = Object.fromEntries(formData)

            const visitorInfo : userData = {
                fullName: String(data.fullName),
                company: String(data.company),
                group: String(data.group),
                presence: String(data.presence) === 'on',
            }

        }
    }

    return createPortal(
        <div className={styles.modalContainer}>
            <div className={styles.modal}>
                <img onClick={()=>{dispatch(close())}} className={styles.closeIco} src='/icons/closeCircleIco.svg' draggable={false} width='46' height='46'></img>
                <form
                    id="addUserForm"
                    className={styles.form}
                    onSubmit={handleSubmit}
                >
                    <div className={styles.formItem}>
                        <label htmlFor="fullName">ФИО</label>
                        <Input id="fullName" name="fullName" isForm={true} required/>
                    </div>
                    <div className={styles.formItem} style={{marginBottom: '17px'}}>
                        <label htmlFor='company'>Компания</label>
                        <Input id="company" name="company" isForm={true} required/>
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
                                        setIsGroupSelectCorrect('correct')
                                        handleClick()
                                    }}>
                                        {gr}
                                    </p>
                                ))}
                            </div>
                            { isGroupSelectCorrect === 'incorrect' && <span>Выберите группу из списка</span>}
                        </div>
                    </div>
                    <div className={styles.formItem}>
                        <label htmlFor="presence">Присутствие</label>
                        <div className={styles.inputCheckBox}>
                            <input type="checkbox" name="presence" id="presence"/>
                        </div>
                    </div>
                </form>
                <div className={styles.buttons}>
                    <Button buttonText={'Добавить'} type="submit" form="addUserForm"/>
                    <Button buttonText={'Закрыть'} bgColor={'gray'} onClick={()=>{dispatch(close())}}/>
                </div>
            </div>
        </div>,
        document.getElementById('modal')!
    )
}

export default ModalWindow