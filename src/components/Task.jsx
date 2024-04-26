export default function TaskTitle({title, setTasks, tasks}){
    const mainClasses = "text-stone-800 hover:text-stone-950"
    function clearTask(){
        const updatedTasks = tasks.filter((task) => task !== title);
        setTasks(updatedTasks);
    }

    return <div className="py-8 px-5 flex justify-between items-center bg-stone-100">
        <p className={mainClasses}>{title}</p>
        <button className={mainClasses} onClick={clearTask}>Clear</button>
    </div>
}