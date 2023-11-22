import { useState } from "react";
import { addTodoData } from "../../redux/actions";
import { useDispatch } from "react-redux";
import {INPUT_SECTION_IDS, INPUT_SECTION_VALIDATION_MESSAGES} from "../../constants/testData/homePage/inputSection"

import styles from "./style.module.css";

const InputSection = () => {
  const dispatch = useDispatch();
  const [todoTitle, setTodoTitle] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleAdd = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    if(todoTitle){
      setError("")
      dispatch(
        addTodoData({
          userId: new Date().getTime(),
          id: new Date().getTime(),
          title: todoTitle,
          completed: false,
          isDummy: true
        })
      );
      setTodoTitle("");
    }else{
      setError(INPUT_SECTION_VALIDATION_MESSAGES.EMPTY_FIELD_SUBMIT)
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoTitle(e.target.value);
  };

  return (
    <form id={styles.inputForm} onSubmit={()=>{}}>
      <div id={styles.outsideContainer}>
        <h3>Add todo form</h3>
        <div id={styles.insideContainer}>
          <input
            id={styles.textBox}
            type="text"
            value={todoTitle}
            placeholder="Enter Text Here"
            onChange={handleChange}
            data-test={INPUT_SECTION_IDS.ATD_INPUT_FIELD}
          />
          {error && 
          <span 
            id={styles.errorText}
            data-test={INPUT_SECTION_IDS.ATD_ERROR_MESSAGE}
          >
            {
            error
            }
          </span>}
        </div>
        <button 
          id={styles.addButton} 
          onClick={handleAdd}
          data-test={INPUT_SECTION_IDS.ATD_BUTTON}
        >
          Add
        </button>
        </div>
    </form>
  );
};

export default InputSection;
