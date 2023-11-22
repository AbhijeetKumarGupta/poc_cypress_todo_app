import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import InputSection from "../../components/inputSection";
import CardSection from "../../components/cardSection";
import { setBackupTodoData, setTodoData } from "../../redux/actions";
import styles from "./style.module.css";
import SearchSection from "../../components/searchSection";
import { ITodoItem } from "../../types/types";

const Home = () => {
    const dispatch = useDispatch();
    const [loading, setIsLoading] = useState<boolean>(true)
    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/todos`)
        .then((res) => res.json())
        .then((result) => {
          handleSetTodoData(result);
          setIsLoading(false)
        })
        .catch((err) => {
          console.log(err);
        });
    // eslint-disable-next-line
    }, []);
  
    const handleSetTodoData = (data: Array<ITodoItem>) => {
      dispatch(setTodoData(data));
      dispatch(setBackupTodoData(data));
    };
    
  return (
    <div id={styles.mainDiv}>
      <div id={styles.actionBar}>
        <InputSection />
        <SearchSection />
      </div>
      {
        loading ?
        <h2 id={styles.loading}>Loading....</h2> :
          <CardSection />
      }
    </div>
  )
}

export default Home;