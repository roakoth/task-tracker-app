import { task, tasks } from "../store/task";
import { useStore } from "@nanostores/preact";

const TaskList = () => {
  // read the store value with the `useStore` hook
  const $task = useStore(task);
  const $tasks = useStore(tasks);

  const setTask = (t) => {
    task.set(t);
  };

  // function to mark a task as complete
  const completeTask = (id) => {
    task.set(
      $tasks.filter((task) => {
        if (task._id === id) {
          return (task.isCompleted = true);
        }
      })
    );
  };

  //function to delete a task
  const deleteTask = (id) => {
    tasks.set(
      $tasks.filter((task) => {
        if (task._id !== id) {
          return task;
        }
      })
    );
  };

  return (
    <>
      <div>
        <h1>Task List</h1>
      </div>
      <div>
        {$tasks.map((task) => {
          return (
            // If there is a task then it should render it
           task && (
              <li style={{ listStyleType: "none" }}>
                <div key={task._id}>
                  <div>
                    <p
                      style={{
                        textDecoration: task.isCompleted ? "line-through" : "",
                      }}
                    >
                      {task.taskName}
                    </p>
                    <p
                      style={{
                        textDecoration: task.isCompleted ? "line-through" : "",
                      }}
                    >
                      {task.taskDate}
                    </p>
                  </div>

                  <div>
                    <div>
                      <button onClick={() => setTask(task)}>Edit</button>
                      <button onClick={() => completeTask(task._id)}>
                        Complete
                      </button>

                      <button onClick={() => deleteTask(task._id)}>
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ) 
          );
        })}
      </div>
    </>
  
  );
};

export default TaskList;
