import { useEffect, useRef, useState } from "react";

export default function Cell(props) {
  const [isEditMode, setIsEditMode] = useState(false);
  const inputRef = useRef(null);

  const changeLabelToInput = () => setIsEditMode(true);

  const changeInputToLabel = () => setIsEditMode(false);

  const onClickOutsideInputHandler = (event) => {
    if (event.target.getAttribute('data-cell-id') != props.dataCellId) {
      changeInputToLabel();
    }
  };

  useEffect(() => {
    document.addEventListener("click", onClickOutsideInputHandler, true);

    return () => {
      document.removeEventListener("click", onClickOutsideInputHandler, true);
    };
  }, []);

  return isEditMode ? (
    <input className="w-full h-6" ref={inputRef} data-cell-id={props.dataCellId} value={props.cellValue} onChange={props.onChange} />
  ) : (
    <div className="w-full h-full" data-cell-id={props.dataCellId} onClick={changeLabelToInput}>
      {props.cellValue}
    </div>
  );
}
