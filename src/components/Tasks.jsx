import Button from "./Button"
import AddIcon from "../assets/icons/add.svg?react"
import TrashIcon from "../assets/icons/trash.svg?react"
import SunIcon from "../assets/icons/sun.svg?react"
import CloudSun from "../assets/icons/cloud-sun.svg?react"
import MoonIcon from "../assets/icons/moon.svg?react"

const Tasks = () => {
  return (
    <div className="w-full px-8 py-16">
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
          <div className="flex gap-2 border-b border-solid border-[#f4f4f5] pb-1">
            <SunIcon />
            <p className="text-[#9a9c9f] text-sm">Manhã</p>
          </div>
        </div>

        {/* Tarde */}

        <div className="space-y-3 my-6">
          <div className="flex gap-2 border-b border-solid border-[#f4f4f5] pb-1">
            <CloudSun />
            <p className="text-[#9a9c9f] text-sm">Tarde</p>
          </div>
        </div>

        {/* Noite */}

        <div className="space-y-3">
          <div className="flex gap-2 border-b border-solid border-[#f4f4f5] pb-1">
            <MoonIcon /> 
            <p className="text-[#9a9c9f] text-sm">Noite</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tasks
