import { atom } from "nanostores"

export const task = atom({
    _id: "",
    taskName: "",
    taskDate: "",
    isCompleted: false
})

export const tasks = atom([])