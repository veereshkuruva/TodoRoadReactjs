import React,{useState} from 'react'

const Todo = () => {

    const [text,setText] =useState("")
    const [todos,setTodos] =useState([])   
    const [editId,setEditId] =useState(0)
  
     const handleSumbit =(e) =>{
         e.preventDefault();

           if(editId){
              const editTodo =todos.find((i)=>i.id===editId)
              const updatedTodo = todos.map((ele)=>ele.id===editTodo.id ?
              
              (ele={id:ele.id,text}) :

              {id:ele.id,text :ele.text}

              );
              setTodos(updatedTodo)
              setEditId(0)
              setText("")
              return;
           }

        
         if(text!==""){
           
            setTodos([{id :`${text} -${Date.now()}`,text},...todos])
            setText("")
         } 
     }
     const deleteHandle=(id)=>{
        const delTodo=todos.filter((t)=>t.id!==id)
        setTodos(delTodo)
     }
     const editHandle =(id)=>{
           const editTodo =todos.find((i)=>i.id===id)
           setText(editTodo.text)
           setEditId(id)
     }
  return (
    <div className='App'>
    <div className='container'>

      <h1>Todo List App</h1>

      <form className='todoForm' onSubmit={handleSumbit}>
        <input type='text'
        placeholder='Add Comment ....'
        value={text}
         onChange={(e)=>setText(e.target.value)}  />
        <button>{editId ?"Edit" :"Add"}</button>
      </form>

      <ul className='allTodos'>
        {
          todos.map((ele)=>(
            <li className='singleTodo'>
            <span className='todoText' key={ele.id}>{ele.text}</span>

            <button onClick={()=>editHandle(ele.id)}>Edit</button>

            <button onClick={()=>deleteHandle(ele.id)}>delete</button>
          </li>
          ))
        }
        
      </ul>
    </div>

  </div>
  )
}

export default Todo