import styles from './Spreadsheet.module.scss'
import {useSelector} from "react-redux";
import type {RootState} from "../../store/store.ts";

const Spreadsheet = () => {

    const visitorInfo = useSelector((state: RootState) => state.visitors.visitors);
    const sortedBy = useSelector((state: RootState) => state.sortedBy.sortedBy);
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
            {sortedBy === 'none' &&
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
            {sortedBy === 'present' &&
                [...visitorInfo].sort((a,b) => Number(b.present) - Number(a.present)).map((info) => (
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
            {sortedBy === 'absent' &&
                [...visitorInfo].sort((a,b) => Number(a.present) - Number(b.present)).map((info) => (
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