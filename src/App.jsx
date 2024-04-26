import Aside from "./components/Aside";
import NoProject from "./components/NoProject";
import AddProject from "./components/AddProject";
import Project from "./components/Project";
import { useState } from "react";

function App() {
  const [addProject, setAddProject] = useState(false)
  const [projects, setProjects] = useState(
    [
    {
      title: "Learning React",
      date: new Date("2010-3-26"),
      description: "Learn React from the group up. \n Start with the basics, finish with advanced knowledge.",
      tasks:[
        "Learning the basics",
        "Going deeper",
      ],
      id: 0
    },
    {
      title: "Mastering React",
      date: new Date("2024-4-24"),
      description: "Learn React's advanced techs.",
      tasks:[
        "Learning the deep info",
      ],
      id: 1
    }
  ])
  const [currentProject, setCurrentProject] = useState(projects.length !== 0 ? projects[0] : false)

  return<main className="mt-8 flex gap-8">
          <Aside projects={projects} setAddProject={setAddProject} setProjects={setProjects} setCurrentProject={setCurrentProject} currentProject={currentProject}/>
          {addProject ?  <AddProject projects={projects} setProjects={setProjects} setAddProject={setAddProject} setCurrentProject = {setCurrentProject}/>:
            projects.length == 0 ? <NoProject setAddProject={setAddProject}/> 
            :<Project project={currentProject} projects={projects} setProjects={setProjects} setCurrentProject={setCurrentProject}/>
          }
          {/* <NoProject/> */}
          {/* <AddProject projects={projects}/> */}
          {/* <Project/> */}
      </main>

}

export default App;
