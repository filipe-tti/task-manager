const SidebarButton = ({children,variant, icon}) => {

    const getVariantClasses = () => {
        if(variant === 'unselected'){
            return "text-[#35383E]"
        }

        if(variant === 'selected'){
            return "rounded-lg bg-[#E6F7F8] text-[#00ADB5]"
        }
    
    }

    return(
        <a href="#" className={`flex items-center gap-2 rounded-lg px-6 py-3 ${getVariantClasses()}`}>
            {icon}
            {children}
        </a> 
    )
}

export default SidebarButton