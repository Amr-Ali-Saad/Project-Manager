import { useRef, useState } from "react"
import HeadTitle from "./HeadTitle"
import Task from "./Task"

export default function Project({project, projects, setProjects,setCurrentProject}){
    const divClasses = "w-[65%] max-w-[800px] h-[calc(100vh - 6rem)] relative pb-5 flex flex-col mt-16"
    const projectDisClasses = "text-stone-600 mb-6"
    const delBtnClasses = "text-stone-800 hover:text-stone-950 flex items-center gap-4 absolute right-0"
    const formattedDate = project?.date?.toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    });
    const [tasks, setTasks] = useState(project?.tasks)
    const addTask = useRef()

    function addTaskHandler(){
        if (addTask.current.value == "" || addTask.current.value == " ") return;
        setTasks([...tasks, addTask.current.value])
        addTask.current.value = ""
        console.log(tasks)
    }

    function delProject(){
        setProjects(projects.filter((newProject) => newProject.id !== project.id));
        setCurrentProject(projects[0]);
        console.log(projects)
    }

    return(
        <div className={divClasses}>
            <button onClick={delProject} className={delBtnClasses}>Delete</button>
            <HeadTitle text={project?.title}/>
            <p className="text-stone-400 mb-4">{formattedDate}</p>
            <div className="flex flex-col">
                <p className={projectDisClasses}>{project?.description}</p>
            </div>

            <hr className="w-full h-[1.5px] bg-[#C8C7C5]"></hr>

            <HeadTitle text="Tasks"/>
            <div className="flex items-center gap-4">
                <input className="w-64 px-2 py-1 rounded-sm bg-stone-200" ref={addTask}/>
                <button className="text-stone-800 hover:text-stone-950" onClick={addTaskHandler}>Add Task</button>
            </div>
            <div className="flex flex-col overflow-y-auto mt-10 gap-2">
                {
                    [tasks?.map((task, i) => <Task key={crypto.randomUUID()} title={task} setTasks={setTasks} tasks={tasks}/>)]
                }
            </div>
        </div>
    )
}