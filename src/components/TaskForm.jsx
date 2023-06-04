import { task, tasks } from "../store/task";
import { useStore } from "@nanostores/preact";
import { nanoid } from "nanoid";

const TaskForm = () => {
  // read the store value with the `useStore` hook
  const $task = useStore(task);
  const $tasks = useStore(tasks);

  // function to create and update a task
  const createOrUpdateTask = (e) => {
    e.preventDefault();
    if ($task._id !== "") {
      tasks.set(
        $tasks.map((t) => {
          // return the updated value
          if (t._id === $task._id) {
            return $task;
          }
          // return the original value if value has not changed
          else {
            return t;
          }
        })
      );
    } else {
      tasks.set([
        ...$tasks,
        {
          ...$task,
          _id: nanoid(8),
        },
      ]);
    }
    console.log($tasks);
    task.set({
      _id: "",
      taskName: "",
      taskDate: "",
      isCompleted: false,
    });
  };

  const setTask = (e) => {
    task.set({
      ...$task,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div>
        <h1>Task Form</h1>
      </div>
      <div>
        <form>
          <div>
            <div>
              <label>Task</label>
              <input
                name="taskName"
                value={$task.taskName}
                onChange={setTask}
                type="text"
                placeholder="Add a Task"
              />
            </div>
            <div>
              <label>Date</label>
              <input
                name="taskDate"
                value={$task.taskDate}
                onChange={setTask}
                type="text"
                placeholder="Set Date"
              />
            </div>
          </div>

          <button onClick={createOrUpdateTask} type="submit">
            Click
          </button>
        </form>
      </div>
    </>
  );
};

export default TaskForm;
