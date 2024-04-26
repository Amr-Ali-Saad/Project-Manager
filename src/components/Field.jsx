import { forwardRef, useRef } from "react"

export default forwardRef(function Field({title, type}, ref){
    const labelClasses = "text-sm font-bold uppercase text-stone-500"
    const originalInputClasses = "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
    const inputClasses = type !== "large" ? originalInputClasses
                        : originalInputClasses + " h-24 resize-none"

    return(
        <p className="flex text-left flex-col gap-1 my-4">
            <label className={labelClasses}>{title}</label>
            
            {type == "date"?
                <input ref={ref} type="date" className={originalInputClasses}/>:
                    type == "large"?
                        <textarea ref={ref} className={inputClasses}/>: 
                        <input ref={ref} className={inputClasses}/>
            }
        </p>
    )
})