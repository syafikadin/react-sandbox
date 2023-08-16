import useLocalStorage from "./hooks/useLocalStorage"

function CustomHookExample2() {
    const [task, setTask] = useLocalStorage('task', '')
    const [tasks, setTasks] = useLocalStorage('tasks', [])

    const onSubmit = (e) => {
        e.preventDefault()

        const taskObj = {
            task,
            completed: false,
            data: new Date().toLocaleDateString()
        }

        setTasks([...tasks, taskObj])
    }

    return (
        <div>
            <form onSubmit={onSubmit} className="w-50">
            <div className="mb-3">
                <label htmlFor="Task" className="form-label">Task</label>
                <input 
                    type="text" 
                    className="form-control"
                    value={task} 
                    onChange={(e) => setTask(e.target.value)}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
            </form> 

            <hr />
            {tasks.map((task) => (
                <h3 key={task.date}>{task.task}</h3>
            ))}
        </div>
    )
}

export default CustomHookExample2