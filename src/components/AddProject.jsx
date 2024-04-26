import { useRef } from "react"
import Feild from "./Field"

export default function AddProject({projects, setProjects, setAddProject, setCurrentProject}){
  const divClasses = "w-[65%] max-w-[800px] mt-16 relative"
  const cancelBtnClasses = "text-stone-800 hover:text-stone-950"
  const saveBtnClasses = "px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
  let title = useRef();
  let description = useRef();
  let date = useRef();

    function handleAdd(){
      if(title.current.value === " " || title.current.value === "" ||
      description.current.value === " " || description.current.value === "" ||
      date.current.value === " " || date.current.value === "") return 
      setProjects((prevProjects) => [...prevProjects, {
        title: title.current.value,
        description: description.current.value,
        date: new Date(date.current.value),
        id: (projects.length - 1) + 1,
        tasks: []
      }])
      // setAddProject(false)
      // setCurrentProject(projects[0])
      console.log(projects)
    }

    return(
        <div className={divClasses}>
            <div className="flex items-center gap-4 absolute right-0">
              <button onClick={() => {setAddProject(false);setCurrentProject(projects[0])}} className={cancelBtnClasses}>Cancel</button>
          <button type="submit" onClick={handleAdd} className={saveBtnClasses}>Save</button>
            </div>
      <form className="mt-[2.5rem] pt-[26px] text-right">
        <Feild
          name="title"
          ref={title}
          // onChange={handleChange}
          title="Title"
          type="normal"
        />
        <Feild
          name="description"
          ref={description}
          // onChange={handleChange}
          title="Description"
          type="large"
        />
        <Feild
          name="date"
          ref={date}
          // onChange={handleChange}
          title="Due Date"
          type="date"
        />
      </form>
    </div>
    )
}