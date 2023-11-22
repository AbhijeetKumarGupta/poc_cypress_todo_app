import { useState } from "react";
import { setTodoData } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

import styles from "./style.module.css";
import { SEARCH_SECTION_IDS, STD_STATUS_RADIO_OPTIONS } from "../../constants/testData/homePage/searchSection";
import { IStore, ITodoItem } from "../../types/types";

const SearchSection = () => {
  const dispatch = useDispatch();
  const {backupTodo} = useSelector((state: IStore) => state);
  const [searchText, setSearchText] = useState<string>("");
  const [status, setStatus] = useState<string>();

  const handleSearch = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    let data = backupTodo;
    if(searchText || status){
      if(searchText){
        data = backupTodo?.filter((todo: ITodoItem) => todo?.title?.toLowerCase().includes(searchText?.toLowerCase()))
      }
      if(status){ 
        data = data?.filter((todo: ITodoItem) => status === todo?.completed?.toString())
      }
    }
    dispatch(setTodoData(data));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleChangeStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = status === e?.target.value ? '' : e?.target.value
    setStatus(value)
  }

  return (
    <form id={styles.inputForm}>
      <div id={styles.outsideContainer}>
        <h3>Filter form</h3>
        <div id={styles.insideContainer}>
          <input
            id={styles.textBox}
            type="text"
            value={searchText}
            placeholder="Enter Search Text Here"
            onChange={handleChange}
            data-test={SEARCH_SECTION_IDS.STD_INPUT_FIELD}
          />
        </div>
        <div id={styles.statusRadioContainer}>
          <h3>Status: </h3>
          <div>
            <input 
              data-test={SEARCH_SECTION_IDS.STD_ALL_RADIO_BUTTON}
              type="radio" value={STD_STATUS_RADIO_OPTIONS.ALL.value} onChange={handleChangeStatus} checked={!status} 
            />
            <label>{STD_STATUS_RADIO_OPTIONS.ALL.title}</label>
          </div>
          <div>
            <input 
              data-test={SEARCH_SECTION_IDS.STD_DONE_RADIO_BUTTON}
              type="radio" value={STD_STATUS_RADIO_OPTIONS.DONE.value} onChange={handleChangeStatus} checked={status === 'true'} 
            />
            <label>{STD_STATUS_RADIO_OPTIONS.DONE.title}</label>
          </div>
          <div>
            <input 
              data-test={SEARCH_SECTION_IDS.STD_OPEN_RADIO_BUTTON}
              type="radio" value={STD_STATUS_RADIO_OPTIONS.OPEN.value} onChange={handleChangeStatus} checked={status === 'false'} 
            />
            <label>{STD_STATUS_RADIO_OPTIONS.OPEN.title}</label>
          </div>
        </div>

        <span 
            id={styles.searchButton} 
            onClick={handleSearch}
            data-test={SEARCH_SECTION_IDS.STD_APPLY_BUTTON}
            >
            Apply
          </span>
      </div>
    </form>
  );
};

export default SearchSection;
