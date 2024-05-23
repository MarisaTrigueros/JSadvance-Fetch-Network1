async function RecuperarTodos(){
    try{
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await response.json();
    console.log(todos);
    } catch (error){
        console.error("Error:", error);
    }
}


(RecuperarTodos());