import Button from "./Button"
import AddIcon from "../assets/icons/add.svg?react"
import TrashIcon from "../assets/icons/trash.svg?react"
import SunIcon from "../assets/icons/sun.svg?react"
import CloudSun from "../assets/icons/cloud-sun.svg?react"
import MoonIcon from "../assets/icons/moon.svg?react"
import TasksSeparator from "./TasksSeparator"
import { useState } from "react"
import TASKS from "../constants/tasks"
import TaskItem from "./TaskItem"

const Tasks = () => {
  
  const [tasks, setTasks] = useState(TASKS)

  const morningTasks = tasks.filter((task) => task.time === "morning")
  const afternoonTasks = tasks.filter((task) => task.time === "afternoon")
  const eveningTasks = tasks.filter((task) => task.time === "evening")

  const handleTaskCheckboxClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if(task.id != taskId ) {
        return task
      }

      // essa tarefa eu preciso atualizar

      if(task.status === 'not_started'){
        return {... task, status: 'in_progress'}
      }

       if(task.status === 'in_progress'){
        return {... task, status: 'done'}
      }

  

    if(task.status === 'done'){
        return {... task, status: 'not_started'}
      }

      return task
    })

          setTasks(newTasks)     
    }
  



  return (
    <div className="w-full px-8 py-16 space-y-6">
      <div className="flex w-full justify-between">
        <div>
          <span className="text-xs font-semibold text-[#00adb5]">
            Minhas Tarefas
          </span>
          <h2 className="text-xl font-semibold">Minhas Tarefas</h2>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost">
            Limpar tarefas
            <TrashIcon />
          </Button>

          <Button>
            Nova tarefa
            <AddIcon />
          </Button>
        </div>
      </div>

      {/* Lista de Tarefas */}

      <div className="rounded-xl bg-white p-6">
        {/* Manhã */}

        <div className="space-y-3">
          <TasksSeparator title="Manhã" icon={<SunIcon />} />
          
           {/* Tarefas de manhã */}
           {morningTasks.map((task) => (
            <TaskItem key={task.id} task={task} handleTaskCheckboxClick={handleTaskCheckboxClick}/>
           ))}

        </div>

        {/* Tarde */}

        <div className="my-6 space-y-3">
          <TasksSeparator title="Tarde" icon={<CloudSun />} />

            {/* Tarefas de tarde */}
            {afternoonTasks.map((task) => (
            <TaskItem key={task.id} task={task} handleTaskCheckboxClick={handleTaskCheckboxClick}/>
           ))}


        </div>

        {/* Noite */}

        <div className="space-y-3">
          <TasksSeparator title="Noite" icon={<MoonIcon />} />

            {/* Tarefas de noite */}
            {eveningTasks.map((task) => (
            <TaskItem key={task.id} task={task} handleTaskCheckboxClick={handleTaskCheckboxClick}/>
           ))}


        </div>
      </div>
    </div>
  )
}

export default Tasks
