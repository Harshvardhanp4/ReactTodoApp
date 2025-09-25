import { useState } from "react";

//react queries
export function CreateTodo(){
    
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return <div>
        <input style ={{
            padding:10,
            margin: 10
        }}
         type="text" placeholder="title" value={title} onChange={(e)=>setTitle(e.target.value)}/><br /><br />
        <input style ={{
            padding:10,
            margin: 10
        }}
        type="text" placeholder="description" onChange={function(e){
            const value = e.target.value;
            setDescription(e.target.value);
        }}/><br /><br />
        <button style ={{
            padding:10,
            margin: 10
        }}onClick={()=>{
            fetch("http://localhost:3000/todo", {
              method: "POST",
              body: JSON.stringify({ title, description }),
              headers: { "Content-Type": "application/json" }
            })
            .then(async function(res) {
              const json = await res.json();
              alert("Todo added");
            });

        }}>Add Todo</button>
    </div>
}