import InputLabel from "./InputLabel"
import InputErrorMessage from "./inputErrorMessage"

const Input = ({label,errorMessage, ...rest}) => {
  return (
    
    <div className="space-y-1 flex flex-col text-left">

    <InputLabel htmlFor={rest.id}>{label}</InputLabel>

<input className="px-4 py-3 border-solid border border-brand-border rounded-lg placeholder:text-sm placeholder:text-brand-text-gray outline-brand-primary"{...rest}/>

      {errorMessage && (
        <InputErrorMessage>{errorMessage}</InputErrorMessage>
      )}


        
    </div>
    
    
  )
}

export default Input