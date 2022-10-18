import { useDispatch } from "react-redux";
import { deleteTasks, toggleTask } from "./redux";

const TaskItem = ({task}) => {
 

  //useDispatch nous permet de parler a redux et lui demander faire une action
  const dispatch = useDispatch()

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => dispatch(toggleTask(task.id))}
        />
        {task.text}

        <span
          onClick={() => dispatch(deleteTasks(task.id))}
          role="button"
          style={{ padding: "5px", marginLeft: "20px" }}
        >
          X
        </span>
      </label>
    </div>
  );
};

export default TaskItem;
