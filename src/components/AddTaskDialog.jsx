import { createPortal } from "react-dom"

const AddTaskDialog = ({isOpen}) => {

    if(!isOpen) return null

  return createPortal( <div className="fixed bottom-0 left-0 top-0 flex h-screen w-screen items-center justify-center backdrop-blur">
        
        {/* DIALOG */}
        <div className="p-5 rounded-xl text-center bg-white shadow">
            <h2 className="text-[#35383E] font-semibold text-xl">Nova Tarefa</h2>
            <p className="text-[#9a9c9f] text-sm mt-1">Insira as informações abaixo</p>

        </div>

    </div>, document.body)
   
  
}

export default AddTaskDialog