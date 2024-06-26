export default function NoProject({setAddProject}){
    const imgClasses = "w-16 h-16 object-contain mx-auto"
    const imgSRC= "/no-projects.png"
    const imgAlt = "no projects found"
    const divClasses = "mt-24 mr-auto ml-auto text-center w-2/3"
    const btnClasses = "px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"

    return(
        <div className={divClasses}>
            <img src={imgSRC} className={imgClasses} alt={imgAlt}/>
            <h2 className="text-xl font-bold text-stone-700 my-4">No Project Selected</h2>
            <p className="text-stone-600 mb-4">Select a project or get started with a new one</p>
            <button onClick={() => setAddProject(true)} className={btnClasses}>Create new project</button>
        </div>
    )
}