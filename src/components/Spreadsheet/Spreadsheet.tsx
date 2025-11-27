import styles from './Spreadsheet.module.scss'
import {useSelector} from "react-redux";
import type {RootState} from "../../store/store.ts";

const Spreadsheet = () => {

    const visitorInfo = useSelector((state: RootState) => state.visitors.visitors);

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
                <tr key={info.id}>
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