import styles from './Spreadsheet.module.scss'
import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootState} from "../../store/store.ts";
import {openEdit} from "../../store/slices/isModalOpenSlice.ts";

const Spreadsheet = () => {

    const visitorInfo = useSelector((state: RootState) => state.visitors.visitors);
    const dispatch = useDispatch<AppDispatch>();

    return (
        <table className={styles.spreadSheets}>
            <thead>
            <tr>
                <th className={styles.firstCol}>Номер</th>
                <th className={styles.secondCol}>ФИО</th>
                <th className={styles.thirdCol}>Компания</th>
                <th className={styles.fourthCol}>Группа</th>
                <th>Присутствие</th>
            </tr>
            <tr className={styles.underLine}></tr>
            </thead>
            <tbody>
            {
                visitorInfo.map((info) => (
                <tr key={info.id} onClick={() => dispatch(openEdit(info))}>
                    <td className={styles.firstCol}>{info.id}</td>
                    <td className={styles.secondCol}>{info.fullName}</td>
                    <td className={styles.thirdCol}>{info.company}</td>
                    <td className={styles.fourthCol}>{info.group}</td>
                    <td className={styles.fifthCol}>
                        <div className={`${styles.present} ${info.present ? styles.green : styles.red}`}></div>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}

export default Spreadsheet