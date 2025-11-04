import { createPortal } from "react-dom"
import { CSSTransition } from "react-transition-group"
import './AddTaskDialog.css'

import Input from "./input"
import Button from './Button'
import { useRef } from "react"

const AddTaskDialog = ({isOpen, handleClose}) => {
    const nodeRef = useRef()

 

  return (
    <CSSTransition nodeRef={nodeRef} in={isOpen} timeout={500} classNames="add-task-dialog" unmountOnExit>
       <div>
         {createPortal( <div ref={nodeRef} className="fixed bottom-0 left-0 top-0 flex h-screen w-screen items-center justify-center backdrop-blur">
        
        {/* DIALOG */}
        <div className="p-5 rounded-xl text-center bg-white shadow">
            <h2 className="text-[#35383E] font-semibold text-xl">Nova Tarefa</h2>
            <p className="text-[#9a9c9f] text-sm mt-1 mb-4">Insira as informações abaixo</p>

            <div className="space-y-4 flex flex-col w-[336px]">
                    <Input id="tittle" label="Título" placeholder="Insira o título da tarefa"/>

                    <Input id="time" label="Horário" placeholder="Horário"/>
                   
                    <Input id="description" label="Descrição" placeholder="Descreva a tarefa"/>

                    <div className="flex gap-3">
                        <Button size="large" className="w-full" variant="secondary" onClick={handleClose}>Cancelar</Button>
                        <Button size="large" className="w-full">Salvar</Button>
                    </div>
            </div>

        </div>

    </div>, document.body)
}
  
       </div>

    </CSSTransition>
        
  )
}
export default AddTaskDialog