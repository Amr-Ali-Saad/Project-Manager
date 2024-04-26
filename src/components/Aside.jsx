export default function Aside({setAddProject, projects, setCurrentProject, currentProject}){
    const asideClasses = "w-1/3 px-8 pt-16 bg-stone-900 h-full text-stone-50 md:w-72 rounded-r-xl"
    const h2Classes = "mb-8 font-bold uppercase md:text-xl text-stone-200"
    const btnClasses = "px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
    const projectNameClasses = "w-full text-left text-stone-400 px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800"
    const activeProject = projectNameClasses + " text-white bg-stone-800"
    return (
        <aside className={asideClasses}>
            <h2 className={h2Classes}>YOUR PROJECTS</h2>
            <button onClick={()=> {setAddProject(true); setCurrentProject(false)}} className={btnClasses}>+ Add Project</button>
            {currentProject !== undefined && <div className="flex flex-col mt-8">
                {
                    projects.map((project, i) =>{
                        return <button onClick={()=> {
                            setAddProject(false)
                            setCurrentProject(projects[project.id])
                        }} key={crypto.randomUUID()} className={project == currentProject? activeProject : projectNameClasses}>{project.title}</button>
                    })
                }
            </div>
            }
        </aside>
    )
}