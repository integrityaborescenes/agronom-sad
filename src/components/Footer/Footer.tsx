
import styles from './Footer.module.scss'
import type {AppDispatch, RootState} from "../../store/store.ts";
import { sortByPresent, sortByAbsent, resetSorting} from "../../store/slices/sortedSlice.ts";
import {useDispatch, useSelector} from "react-redux";
const Footer = () => {

    const dispatch = useDispatch<AppDispatch>();
    const whatSortedBy = useSelector((state: RootState) => state.sortedBy.sortedBy);

    return (
        <div className={styles.footer}>
            <h2>Фильтровать по:</h2>
            <div className={styles.filter}>
                <button onClick={()=> dispatch(sortByAbsent())}>
                    <p className={`${whatSortedBy==='present=false' ? styles.activeR : ''}`}>Отсутсвующим</p>
                </button>
                <button onClick={()=> dispatch(sortByPresent())}>
                    <p className={`${whatSortedBy==='present=true' ? styles.activeG : ''}`}>Присутствующим</p>
                </button>
                <button className={styles.withoutFilters} onClick={()=>dispatch(resetSorting())}>
                    <p>Без фильтра</p>
                </button>
            </div>
        </div>
    )
}

export default Footer