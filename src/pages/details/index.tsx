import { useNavigate, useParams } from "react-router";
import styles from "./style.module.css";
import { useEffect, useState } from "react";
import { DETAILS_SECTION_IDS } from "../../constants/testData/detailsPage/detailsSection";
import { ITodoItem } from "../../types/types";

const TodoDetails = () => {
    const { todoId } = useParams()
    const [loading, setLoading] = useState<boolean>(true)
    const [todoData, setTodoData] = useState<ITodoItem>()
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
          .then((res) => res.json())
          .then((result) => {
            setTodoData(result);
            setLoading(false)
          })
          .catch((err) => {
            console.log(err);
            setLoading(false)
          });
    }, [todoId]);

    return (
        <div id={styles.mainDiv}>
            {
                loading ?
                    <h2 id={styles.loading}>Loading.....</h2> :
                    !todoData?.id ?
                        <h1 id={styles.notFound}>404 Not Found</h1> :
                        <>
                            <h1 id={styles.header}>Task Details</h1>
                            <h2 className={styles.detailRows}>Task ID&nbsp;:&nbsp;<span data-test={DETAILS_SECTION_IDS.TD_TASK_ID} className={styles.valueData}>{todoData?.id}</span></h2>
                            <h2 className={styles.detailRows}>Task title&nbsp;:&nbsp;<span className={styles.valueData}>{todoData?.title}</span></h2>
                            <h2 className={styles.detailRows}>Is complete?&nbsp;:&nbsp;<span className={styles.valueData}>{todoData?.completed ? 'True' : 'False'}</span></h2>
                            <button
                                id={styles.goBackButton}
                                data-test={DETAILS_SECTION_IDS.TD_BACK_BUTTON}
                                onClick={() => navigate('/poc_cypress_todo_app')}
                            >
                                {'< Go back'}
                            </button>
                        </>
            }
        </div>
    )
}

export default TodoDetails;
