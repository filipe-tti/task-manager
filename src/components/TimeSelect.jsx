import InputLabel from "./InputLabel"
import InputErrorMessage from "./inputErrorMessage"

const TimeSelect = (props) => {
  return (
     <div className="flex flex-col gap-1 text-left">
                        
                    <InputLabel htmlFor="time">Horário</InputLabel>


                    <select id="time" className="px-4 py-3 border-solid border border-[#ececec] rounded-lg placeholder:text-sm placeholder:text-[#9a9c9f] outline-[#00adb5] "{...props}>
                        <option value="morning">Manhã</option>
                        <option value="afternoon">Tarde</option>
                        <option value="evening">Noite</option>
                    </select>

                    {props.errorMessage && (
                        <InputErrorMessage>{props.errorMessage}</InputErrorMessage>
      )}
                    </div>
  )
}

export default TimeSelect