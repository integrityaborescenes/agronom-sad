import styles from './Spreadsheet.module.scss'
import {useEffect, useState} from "react";

const Spreadsheet = () => {

    type Visitors = {
        id: number,
        fullName: string,
        company: string,
        group: string,
        present: boolean,
    }

    const [visitorsInfo, setVisitorsInfo] = useState<Visitors[]>([])
    useEffect(() => {
        fetch('http://localhost:3000/visitors')
            .then((response) => response.json())
            .then(setVisitorsInfo)
    }, []);

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
            {visitorsInfo.map((info) => (
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