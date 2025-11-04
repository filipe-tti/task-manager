import InputLabel from "./InputLabel"

const Input = ({label, ...rest}) => {
  return (
    
    <div className="space-y-1 flex flex-col text-left">

    <InputLabel htmlFor={rest.id}>{label}</InputLabel>

<input className="px-4 py-3 border-solid border border-[#ececec] rounded-lg placeholder:text-sm placeholder:text-[#9a9c9f] outline-[#00adb5]"{...rest}/>
        
    </div>
    
    
  )
}

export default Input