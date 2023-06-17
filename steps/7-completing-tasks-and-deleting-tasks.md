# Marking a task as completed and deleting tasks

I want to mark a task as complete when I click the ‘complete’ button. In order for me to do that, I need to search for that specific task by its id and then add a cross line to it, which will show that is complete.
In that case, I'll create `completeTask` function below.

```

const completeTask = (id) => {
    task.set(
        $tasks.filter((task) => {
        if (task._id === id) {
                            return task.isCompleted = true
                            }


        })
    )
 }


```

Tha `completeTask` function will filter through my `tasks` and if it find a task whose id is equal to the one that I have selected, then it will return that specific task and set the property `isCompleted` to be true.

When the property `isCompleted` is set to true, I want that specific task to be crossed with a line. Therefore I will add css styles to the HTML elements that contains task details.

My elements will look like this:

```

<div>
                  <p className={task.isCompleted ? "line-through" : ""}>
                    {task.taskName}
                  </p>
                  <p className={task.isCompleted ? "line-through" : ""}>
                    {task.taskDate}
                  </p>
                </div>

```

The `<p>` element renders the `taskName` and `taskDate` property of the task object. It applies the CSS class `"line-through"` if the `isCompleted` property of the task object is `true`, indicating that the task has been completed. By default the `isCompleted` value is false. This distinguishes completed tasks by showing them with a strikethrough effect. 


## Deleting a task

To delete a task, I will need to get that specific `task` by its id through filtering through my `tasks` store. I will create a `deleteTask` function that will contain the `filter()` method which will iterate over each task object in the `tasks` array and check if the `_id` property of the `task` object is not equal to the provided `id`. If the `_id` property does not match the provided `id`, the `task` will be kept in the filtered array. If the `_id` property matches the provided `id`, then the `task` will be filtered out and not included in the resulting array.
I will only return `tasks` that do not match the `task` with the `id` I have just selected.

I will add the code below:

```
  const deleteTask = (id) => {
    tasks.set(
      $tasks.filter((task) => {
        if (task._id !== id) {
          return task;
        }
      })
    );
  };

```

On my `Delete` button, I will call the `deleteTask` function and it should look like this:

```

<button onClick={() => deleteTask(task._id)}>
                        Delete
                      </button>

```

Now the app is fully functional. I can now add a task, edit it, mark it as completed and remove the task. 






