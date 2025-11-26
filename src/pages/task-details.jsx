import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import Button from "../components/Button"
import InputLabel from "../components/InputLabel"
import Input from "../components/Input"
import TimeSelect from "../components/TimeSelect"

import {
  
  ArrowLeftIcon,
 ChevronRightIcon,
 TrashIcon

 
} from "../assets/icons"



const TaskDetailsPage = () => {
    
    const {taskId} = useParams ()

    const [task, setTask] = useState()
   const navigate = useNavigate()
    const handleBackClick = () => {
      navigate(-1)
    }
   
     useEffect (() => {
       const fetchTask = async () => {
          
       const response = await fetch (`http://localhost:3000/tasks/${taskId}`, {
         method: 'GET',
   
       })
   
       const data = await response.json()
       setTask(data)
    
   
       }

       fetchTask()
   

     }, [taskId])





 
    return (
    <div className="flex">
      <Sidebar/>
      <div className="px-8 py-16 w-full space-y-6">
        {/*Barra do topo*/ }
        <div className="flex justify-between w-full">
            {/*parte da esquerda*/ }
            <div>

              <div onClick={handleBackClick} className="h-8 w-8 rounded-full bg-brand-primary flex items-center justify-center mb-3">
                <ArrowLeftIcon/>
              </div>
                 <div className="flex items-center gap-1 text-xs">
                <span onClick={handleBackClick} className="text-brand-text-gray cursor-pointer">Minhas tarefas</span>
                <ChevronRightIcon className="text-brand-text-gray" />
                <span className="text-brand-primary font-semibold ">{task?.title}</span>
            </div>
              <h1 className="text-xl font-semibold mt-2">sdsd</h1>

            </div>

            {/* parte da direita */}
            <Button className="h-fit self-end" color='danger'><TrashIcon/>Deletar tarefa</Button>
        </div>

        {/* dados da tarefa  */}
        <div className="bg-brand-white p-6 rounded-xl space-y-6">
            <div>
               
               <Input id="title" label="Título" value={task?.title}/>
            </div>

             <div>
               <TimeSelect value={task?.time}/>
            </div>

             <div>
               
                <Input id="description" label="Descrição" value={task?.description}/>
            </div>

            
        </div>

        <div className="w-full flex justify-end gap-3">
            <Button size='large' color='secondary'>Cancelar</Button>
            <Button size='large' color='primary'>Salvar</Button>
        </div>


      </div>
    </div>
  )
}

export default TaskDetailsPage