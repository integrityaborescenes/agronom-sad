import {createPortal} from 'react-dom'
import styles from './ModalWindow.module.scss'
import Input from "../Input/Input.tsx";
import Button from "../Button/Button.tsx";
import {useEffect, useState} from "react";
import {close} from "../../store/slices/isModalOpenSlice.ts";
import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootState} from "../../store/store.ts";
import {addVisitor, editVisitor, removeVisitor} from "../../store/slices/visitorSlice.ts";
import {whatAnimation} from "../../store/slices/animationSlice.ts";
const ModalWindow = () => {

    const dispatch = useDispatch<AppDispatch>();
    const visitors = useSelector((state: RootState) => state.visitors.visitors);
    const idCount = visitors.length > 0 ? visitors[visitors.length-1].id : 0
    const isEditOpen = useSelector((state: RootState) => state.isModalOpen.edit);
    const whatVisitorOpenToEdit = useSelector((state: RootState) => state.isModalOpen.currentVisitor);
    const [selectorOpen, setSelectorOpen] = useState<boolean>(false)
    const [whatSelect, setWhatSelect] = useState('Выбрать');
    const [fullName, setFullName] = useState('');
    const [company, setCompany] = useState('');
    const [isPresent, setIsPresent] = useState(false);
    const [isGroupSelectCorrect, setIsGroupSelectCorrect] = useState<string>('')
    let groups: string [] = ['Прохожий', 'Клиент', 'Партнер']

    useEffect(() => {
        if (isEditOpen && whatVisitorOpenToEdit) {
            setWhatSelect(whatVisitorOpenToEdit.group);
            setFullName(whatVisitorOpenToEdit.fullName);
            setCompany(whatVisitorOpenToEdit.company);
            setIsPresent(whatVisitorOpenToEdit.present);
        } else {
            setWhatSelect('Выбрать');
            setFullName('');
            setCompany('');
            setIsPresent(false);
        }
    }, [isEditOpen, whatVisitorOpenToEdit]);

    const handleClick = () => {
        setSelectorOpen(prev => !prev)
    }

    const handeClickDelete = () => {
        const isUserConfirm : boolean = confirm('Вы уверены что хотите удалить пользователя?')

        if(isUserConfirm && whatVisitorOpenToEdit) {
            dispatch(whatAnimation('delete'))
            setTimeout(()=> {
                fetch(`http://localhost:3000/visitors/${whatVisitorOpenToEdit.id}`, {
                    method: 'DELETE',
                }).then(() => {
                    dispatch(removeVisitor(whatVisitorOpenToEdit))
                    dispatch(whatAnimation(''))
                })
            },400)
            dispatch(close())
        }
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        type userData = {
            id: number;
            fullName: string;
            company: string;
            group: string;
            present: boolean;
        }

        if (whatSelect === 'Выбрать') {
            setIsGroupSelectCorrect('incorrect')
        } else {
            setIsGroupSelectCorrect('correct')
            const form = e.currentTarget
            const formData = new FormData(form);
            const data = Object.fromEntries(formData)

            if ( isEditOpen && whatVisitorOpenToEdit ) {
                const updatedVisitorInfo : userData = {
                    id: whatVisitorOpenToEdit.id,
                    fullName: String(data.fullName),
                    company: String(data.company),
                    group: whatSelect,
                    present: String(data.present) === 'on',
                }

                fetch(`http://localhost:3000/visitors/${whatVisitorOpenToEdit.id}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json'},
                    body: JSON.stringify(updatedVisitorInfo)
                }).then((response) => response.json())
                    .then((data) => dispatch(editVisitor(data)))

                dispatch(close())
            } else {

                const visitorInfo : userData = {
                    id: idCount + 1,
                    fullName: String(data.fullName),
                    company: String(data.company),
                    group: whatSelect,
                    present: String(data.present) === 'on',
                }

                fetch('http://localhost:3000/visitors', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json'},
                    body: JSON.stringify(visitorInfo)
                }).then((response) => response.json())
                    .then((data) => dispatch(addVisitor(data)))

                dispatch(close())
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
                        {isEditOpen && whatVisitorOpenToEdit && <Input id="fullName" name="fullName" isForm={true} required value={fullName} onChange={(e) => setFullName(e.target.value)}/>}
                        {isEditOpen !== true && <Input id="fullName" name="fullName" isForm={true} required/>}
                    </div>
                    <div className={styles.formItem} style={{marginBottom: '17px'}}>
                        <label htmlFor='company'>Компания</label>
                        {isEditOpen && whatVisitorOpenToEdit && <Input id="company" name="company" isForm={true} required value={company} onChange={(e) => setCompany(e.target.value)}/>}
                        {isEditOpen !== true && <Input id="company" name="company" isForm={true} required/>}
                    </div>
                    <div className={styles.formItem} style={{marginBottom: '29px'}}>
                        <label>Группа</label>
                        <div className={styles.selectGroup}>
                            {isEditOpen && whatVisitorOpenToEdit && <div className={`${styles.selected} ${selectorOpen ? styles.active : ''}`} onClick={() => {
                                handleClick();
                                setWhatSelect('Выбрать')
                            }}>
                                <p>{whatSelect}</p>
                                <img src='/icons/arrowDownIco.svg' draggable='false' width='10' height='5'/>
                            </div>}
                            {isEditOpen !== true && <div className={`${styles.selected} ${selectorOpen ? styles.active : ''}`} onClick={() => {
                                handleClick();
                                setWhatSelect('Выбрать')
                            }}>
                                <p>{whatSelect}</p>
                                <img src='/icons/arrowDownIco.svg' draggable='false' width='10' height='5'/>
                            </div>}
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
                        <label htmlFor="present">Присутствие</label>
                        <div className={styles.inputCheckBox}>
                            <input type="checkbox" name="present" id="present" checked={isPresent} onChange={() => setIsPresent(prev => !prev)}/>
                        </div>
                    </div>
                </form>
                <div className={styles.buttons}>
                    <Button buttonText={'Добавить'} type="submit" form="addUserForm"/>
                    {isEditOpen && whatVisitorOpenToEdit && <Button buttonText={'Удалить'} bgColor={'red'} onClick={handeClickDelete}/>}
                    <Button buttonText={'Закрыть'} bgColor={'gray'} onClick={()=>{dispatch(close())}}/>
                </div>
            </div>
        </div>,
        document.getElementById('modal')!
    )
}

export default ModalWindow