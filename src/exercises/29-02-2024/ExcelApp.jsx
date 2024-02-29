import Cell from "./components/Cell";
import { useState } from "react";

export default function ExcelApp() {
  const [cellsValue, setCellsValue] = useState(["", ""]);

  const handleCellValueChange = (e) => {
    const index = e.target.getAttribute('data-cell-id');
    const newCellsValue = [...cellsValue]
    newCellsValue[index] = e.target.value;
    setCellsValue(newCellsValue)
  } 

  return(
    <>
      <table>
        <tbody>
          <tr>
            <td>First Name</td>
            <td className="w-32 h-6 border border-black"><Cell cellValue={cellsValue[0]} dataCellId={"0"} onChange={handleCellValueChange} /></td>
          </tr>
          <tr>
            <td>Last Name</td>
            <td className="w-32 h-6 border border-black"><Cell cellValue={cellsValue[1]} dataCellId={"1"} onChange={handleCellValueChange} /></td>
          </tr>
        </tbody>
      </table>
    </>
  );
}