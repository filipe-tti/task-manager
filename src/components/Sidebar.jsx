import SidebarButton from "./SidebarButton"
import  HomeIcon from '../assets/icons/home.svg?react'
import  TasksIcon from '../assets/icons/tasks.svg?react'

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-white">
      <div className="px-8 py-6 space-y-4">
        <h1 className="text-xl text-[#00adb5]">Task Manager</h1>
        <p>
          um simples{" "}
          <span className="text-[#00adb5]">organizador de tarefas</span>
        </p>
      </div>

      <div className="flex flex-col p-2 gap-2">
         <SidebarButton variant="unselected">
         <HomeIcon  />
          Início</SidebarButton> 
         <SidebarButton variant="selected">
          <TasksIcon  />
          Minhas Tarefas</SidebarButton> 
            
          

           
      </div>

    </div>
  )
}

export default Sidebar
