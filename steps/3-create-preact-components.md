# Creating Preact components

Components are the building blocks of an application.

In this application, I want to have a form where I will submit my task details by clicking the button, once the details are submitted, I want them to be rendered below the form where I can manipulate each task by editing it, marking it as completed and removing it. So I’ll have two components in my application. That will be `TaskForm` component and `TaskList` component.

I’ll create a new folder called `components` in the `src` folder. Then I’ll create two components files in the components folder, the first component file will be called `TaskForm.jsx` and the second component will be called `TaskList.jsx`

Preact also uses .jsx extension for the components just like React.

I will import `task` and `tasks` from the `task` store into the two components since I will be reading and writing into it. I am also importing the `useStore` helper which is used to read the store values, whenever the store value is being rendered in the UI

Therefore, I will add the imports on my `TaskForm.jsx` file

```

import { task, tasks } from "../store/task";
import { useStore } from "@nanostores/preact";

```

I will use function components to create a Task component which will return the form that has input elements as shown in the code below.

```

const TaskForm = () => {
    return <>
       <div>
       <h1>Task Form</h1>
       </div>
        <div>

            <form>
                <div>
                    <div>
                        <label>
                            Task
                        </label>
                        <input name="taskName" type="text"        placeholder="Add a Task"/>
                    </div>
                    <div>
                        <label>
                            Date
                        </label>
                        <input name="taskDate" type="text"         placeholder="Set Date" />
                    </div>
                </div>

                <button type="submit">
                    Add Task
                </button>
            </form>
        </div></>
}


export default TaskForm

```

I’ll create the second component which is `TaskList` that will display each task that is created from the `TaskForm` component as a list.
The `TaskList.jsx` file will contain the code below:

```

import { task, tasks } from "../store/task"
import { useStore } from '@nanostores/preact';

const TaskList = () => {

    return <>

      <div>
            <h1>Task List</h1>
        </div>
        <div>

             <div>
                    <div>
                            <p> Task Name will be inserted here</p>
                            <p>Date will be inserted here</p>
                     </div>

                        <div>
                            <div>
                                <button>
                                    complete
                                </button>

                                <button>
                                    Delete
                                </button>

                                <button>
                                    Edit
                                </button>
                            </div>
                          </div>

                    </div>

        </div>

    </>
}


export default TaskList

```


