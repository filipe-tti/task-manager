const Input = ({label, ...rest}) => {
  return (
    
    <div className="space-y-1 flex flex-col text-left">
<label className="text-sm font-semibold text-[#35383E]" htmlFor={rest.id}>{label}</label>

<input className="px-4 py-3 border-solid border border-[#ececec] rounded-lg placeholder:text-sm placeholder:text-[#9a9c9f] outline-[#00adb5]"{...rest}/>
        
    </div>
    
    
  )
}

export default Input