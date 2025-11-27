
import styles from './Footer.module.scss'
import type {AppDispatch} from "../../store/store.ts";
import { sortByPresent, sortByAbsent, resetSorting} from "../../store/slices/sortedSlice.ts";
import {useDispatch} from "react-redux";
const Footer = () => {

    const dispatch = useDispatch<AppDispatch>();

    return (
        <div className={styles.footer}>
            <h2>Фильтровать по:</h2>
            <div className={styles.filter}>
                <button onClick={()=> dispatch(sortByAbsent())}>
                    <p>Отсутсвующим</p>
                </button>
                <button onClick={()=> dispatch(sortByPresent())}>
                    <p>Присутствующим</p>
                </button>
                <button className={styles.withoutFilters} onClick={()=> dispatch(resetSorting())}>
                    <p>Без фильтра</p>
                </button>
            </div>
        </div>
    )
}

export default Footer