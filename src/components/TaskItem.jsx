import CheckIcon from '../assets/icons/check.svg?react'
import LoaderIcon from '../assets/icons/loader.svg?react'
import DetailsIcon from '../assets/icons/details.svg?react'
import TrashIcon from '../assets/icons/trash.svg?react'
import Button from '../components/Button'

const TaskItem = ({task, handleCheckboxClick, handleDeleteClick}) => {

    const getStatusClassses = () => {
        if( task.status === "done"){
            return "bg-[#00adb5]  text-[#00adb5]"
        }

        if (task.status === "in_progress") {
            return "bg-[#ffaa04]  text-[#ffaa04]"
        }

         if (task.status === "not_started") {
            return "bg-[#35383e] bg-opacity-10  text-[#35383e]"
        }
    }

  return (
        <div className={` transition justify-between bg-opacity-10 text-sm px-4 py-3 flex items-center gap-2 rounded-lg ${getStatusClassses()}`}>

        <div className='flex items-center gap-2'>
              <label
          className={`relative flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg ${getStatusClassses()}`}
        >
          <input
            type="checkbox"
            checked={task.status === "done"}
            className="absolute h-full w-full cursor-pointer opacity-0"
            onChange={() => handleCheckboxClick(task.id)}
           
          />

          {task.status === "done"  && <CheckIcon/>}
          {task.status === "in_progress"  && <LoaderIcon className="animate-spin text-brand-white" />}
          
          
        </label>

            {task.title}
        </div>

        <div className='flex items-center gap-2'>
          <Button variant='ghost' onClick={()=> handleDeleteClick(task.id)}>
            <TrashIcon className="text-[#9a9c9f]"/>
        </Button>

        <a href='#' className='hover:opacity-75 transition'><DetailsIcon/></a>
        </div>

        
        </div>
  )
}

export default TaskItem