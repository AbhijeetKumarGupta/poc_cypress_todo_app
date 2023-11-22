import { useDispatch } from "react-redux";
import { markAsDone, markAsOpen, removeDataFromTodo } from "../../redux/actions";
import { CARD_SECTION_IDS } from "../../constants/testData/homePage/cardSection";

import styles from "./style.module.css";
import { useNavigate } from "react-router";
import { ICard } from "../../types/types";

const Card = (props: ICard) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemove = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    //@ts-ignore
    dispatch(removeDataFromTodo(e.target.id));
  };

  const handleMarkAsDone = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    //@ts-ignore
    dispatch(markAsDone(e.target.id))
  }

  const handleMarkAsOpen = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    //@ts-ignore
    dispatch(markAsOpen(e.target.id))
  }

  const handleView = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    //@ts-ignore
    navigate(`/${e.target.id}`)
  }

  return (
    <div className={props.data?.completed ? styles.todoCardDone : styles.todoCard} data-test={CARD_SECTION_IDS.TL_CARD}>
      <div className={styles.todoMessageDiv}>
        {props?.data?.title}
      </div>
      <div id={styles.buttonContainer}>
        <button
          id={`${props?.data?.id}`}
          className={styles.removeButton}
          onClick={handleRemove}
          data-test={CARD_SECTION_IDS.TL_CARD_REMOVE_BUTTON}
        >
          Remove
        </button>
        <button 
          id={`${props?.data?.id}`}
          className={styles.doneButton}
          disabled={props.data?.completed}
          onClick={handleMarkAsDone}
          data-test={CARD_SECTION_IDS.TL_MARK_AS_DONE_BUTTON}
        >
          Mark as done
        </button>
        <button 
          id={`${props?.data?.id}`}
          className={styles.openButton}
          disabled={!props.data?.completed}
          onClick={handleMarkAsOpen}
          data-test={CARD_SECTION_IDS.TL_MARK_AS_OPEN_BUTTON}
        >
          Mark as open
        </button>
        <button 
          id={`${props?.data?.id}`}
          className={styles.viewButton}
          onClick={handleView}
          data-test={CARD_SECTION_IDS.TL_VIEW_BUTTON}
          disabled={props?.data?.isDummy}
        >
          View{props?.data?.isDummy ? '(Dummy Data)' : ''}
        </button>
      </div>
    </div>
  );
};

export default Card;
