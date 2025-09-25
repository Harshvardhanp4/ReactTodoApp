


export function Todos({todos}){
    
    return <div>
        {todos.map(function(todo){
            return <div key ={index}>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button>{todo.completed == true ? "Completed":"Mark as Completed"}</button>
                {/* the above statement is simplified if else if true completed else mark as completed */}
            </div>
        })}
    </div>
}