import styles from './Spreadsheet.module.scss'

const Spreadsheet = () => {
    return (
        <div className={styles.spreadSheets}>
            <table className={styles.spreadSheets}>
                <thead>
                    <tr>
                        <th className={styles.firstCol}>Номер</th>
                        <th className={styles.secondCol}>ФИО</th>
                        <th className={styles.thirdCol}>Компания</th>
                        <th className={styles.fourthCol}>Группа</th>
                        <th>Присутствие</th>
                    </tr>
                    <div className={styles.underLine}></div>
                </thead>
                <tbody>
                    <tr>
                        <td className={styles.firstCol}>1</td>
                        <td className={styles.secondCol}>Козлова Мария</td>
                        <td className={styles.thirdCol}>ЗАО Одуванчик</td>
                        <td className={styles.fourthCol}>Партнер</td>
                        <td>
                            <div className={styles.present}></div>
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.firstCol}>1</td>
                        <td className={styles.secondCol}>Козлова Мария</td>
                        <td className={styles.thirdCol}>ЗАО Одуванчик</td>
                        <td className={styles.fourthCol}>Партнер</td>
                        <td>
                            <div className={styles.present}></div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Spreadsheet