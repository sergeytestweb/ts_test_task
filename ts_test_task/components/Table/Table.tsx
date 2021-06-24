import { TableProps } from "./Table";
import style from " ./Table.module.css";
const table = require("./JSON/Table.json");

export const Table = ({ children, ...props }: TableProps): JSX.Element => {

  return (
    <div className="my-table">
      <table>
        <thead>
          <tr>
            {table.header.map((el, index) => {
              return <th key={index}>{el}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, index) => {
            return <tr key={index}>{row.cols.map((col, index2) => {
				return <td key={index2}>{col}</td>;
			})}</tr>;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
