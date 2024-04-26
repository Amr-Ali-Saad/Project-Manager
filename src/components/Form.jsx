import { useRef } from "react"
import Feild from "./Field"

export default function Form({newProject, setProjects, projects}){
    // let title;
    // let description;
    // let date;

    // if(newProject === true) {
    //     // title = useRef()
    //     // description = useRef()
    //     // date = useRef()

    //     setProjects([...projects , {
    //         title: "New title",
    //         description: "lorem ispurime",
    //         date: "A Date",
    //         tasks: ["A Task"],
    //         id: "12fgh4k65fhgk"
    //     }])
    // }
    console.log(projects)

    return(
        <form className="mt-[2.5rem] pt-[26px] text-right">
            <Feild  title="title" type="normal"></Feild>
            <Feild  title="description" type="large"></Feild>
            <Feild  title="due date" type="date"></Feild>
        </form>
    )
}