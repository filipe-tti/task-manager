import Button from "./Button"
import { TrashIcon, AddIcon, SunIcon, CloudSunIcon, MoonIcon} from "../assets/icons"
import TasksSeparator from "./TasksSeparator"
import { useState } from "react"
import TASKS from "../constants/tasks"
import TaskItem from "./TaskItem"
import { toast } from "sonner"

const Tasks = () => {
  
  const [tasks, setTasks] = useState(TASKS)

  const morningTasks = tasks.filter((task) => task.time === "morning")
  const afternoonTasks = tasks.filter((task) => task.time === "afternoon")
  const eveningTasks = tasks.filter((task) => task.time === "evening")

  const handleDeleteClick = (taskId) => {
    const newTasks = tasks.filter(task => task.id != taskId)
      setTasks(newTasks)
      toast.success("Tarefa deletada com sucesso!")

  }

  const handleTaskCheckboxClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if(task.id != taskId ) {
        return task
      }

      // essa tarefa eu preciso atualizar

      if(task.status === 'not_started'){
        toast.success("Tarefa iniciada com sucesso!")
        return {... task, status: 'in_progress'}
        
      }

       if(task.status === 'in_progress'){
        toast.success("Tarefa concluída com sucesso!")
        return {... task, status: 'done'}
      }

  

    if(task.status === 'done'){
      toast.success("Tarefa reiniciada com sucesso!")
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
            <TaskItem key={task.id} task={task} handleCheckboxClick={handleTaskCheckboxClick} handleDeleteClick={handleDeleteClick}/>
           ))}

        </div>

        {/* Tarde */}

        <div className="my-6 space-y-3">
          <TasksSeparator title="Tarde" icon={<CloudSunIcon />} />

            {/* Tarefas de tarde */}
            {afternoonTasks.map((task) => (
            <TaskItem key={task.id} task={task} handleCheckboxClick={handleTaskCheckboxClick} handleDeleteClick={handleDeleteClick}/>
           ))}


        </div>

        {/* Noite */}

        <div className="space-y-3">
          <TasksSeparator title="Noite" icon={<MoonIcon />} />

            {/* Tarefas de noite */}
            {eveningTasks.map((task) => (
            <TaskItem key={task.id} task={task} handleCheckboxClick={handleTaskCheckboxClick} handleDeleteClick={handleDeleteClick}/>
           ))}


        </div>
      </div>
    </div>
  )
}

export default Tasks
