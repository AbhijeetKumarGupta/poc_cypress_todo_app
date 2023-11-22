import Card from "../todoCard";
import { useSelector } from "react-redux";
import styles from "./style.module.css";
import { CARD_SECTION_IDS, EMPTY_TL_MESSAGE } from "../../constants/testData/homePage/cardSection";
import { IStore, ITodoItem } from "../../types/types";

const CardSection = () => {
  const todoData = useSelector((state: IStore) => state.todoData);
  return (
    <>
      <h2 id={styles.listTitle}>Todo List :</h2>
      <div 
        id={styles.cardContainer}
        data-test={CARD_SECTION_IDS.TL_CARD_CONTAINER}
      >
        {todoData.length > 0 ?
          todoData.map((item: ITodoItem, index: number) => 
            <Card key={item.id} data={item}/>
          ) :
          <div id={styles.emptyList}>
            {EMPTY_TL_MESSAGE}
          </div>
        }
      </div>
    </>
  );
};

export default CardSection;
