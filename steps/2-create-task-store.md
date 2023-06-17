# Creating a task store

Think of a store as a place where we keep common data that can be accessed by our Preact components at any one given time. 

In this case, I’ll create a task store where I will have my task details. 
I’ll use an [atom](https://github.com/nanostores/nanostores#atoms) for this. Atom store can be used to store strings, numbers and arrays.

I’ll create a folder called `store` in the src folder. In the store folder, I’ll create a javascript file called `task.js` 

The store will contain my task details such as it’s id, name, date, and a boolean property to check if the task is completed or not. 

To create my task store, I’ll call an atom function and pass my task details object as it’s first argument as shown in the code below.

```

import { atom } from "nanostores"


export const task = atom({
   _id: "",
   taskName: "",
   taskDate: "",
   isCompleted: false
})


export const tasks = atom([])

```

The `tasks` variable will be an array containing task objects.This task store can be imported into any file that needs to read and write to it.