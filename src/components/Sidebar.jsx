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

      <div className="flex flex-col p-2">
           <a href="/home">Início</a> 
           <a href="">Minhas tarefas</a>
      </div>

    </div>
  )
}

export default Sidebar
