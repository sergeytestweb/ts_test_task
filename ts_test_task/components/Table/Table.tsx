import { TableProps } from "./Table";
import styles from "./table.module.css";

const table = require("../JSON/dataUrl.json");

export const Table = ({ children, ...props }: TableProps): JSX.Element => {

// const getTotalValues = value => {

// }

  return (
    <div className={styles.sсrollableTableBox}>
      <table>
        <thead>
          <tr>
            {table.header.map((el, elIndex) => {
              return <th key={elIndex}>{el}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, rowIndex) => {
            return (
              <tr key={rowIndex}>
                {row?.cols?.map((col, colIndex) => {
                  //if(col.id) getTotalValues(col.value)
                  return <td key={colIndex}>{col.value}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
