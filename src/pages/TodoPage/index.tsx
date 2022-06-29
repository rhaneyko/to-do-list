import React, { FormEvent } from 'react';

import {
    Container,
    TodoContainer,
    Title,
    Create,
    CreateTodo,
    CreateButton,
    Todos,
    TodosList,
    Todo,
    TodoText,
    Buttons,
    DeleteButton,
    TodoCompleted,
} from './styles';  

import { AiOutlinePlusCircle, AiOutlineDelete } from 'react-icons/ai'

interface TodoProps {
    id: number;
    title: string;
    completed: boolean;
}

const TodoPage = () => {
    const [todoTitle , setTodoTitle] = React.useState('');
    const [todos, setTodos] = React.useState<TodoProps[]>([]);

    function createNewTodo(e: FormEvent<HTMLFormElement>){
      e.preventDefault();

      if(!todoTitle){
        return alert('Digite um título para a tarefa');
      }

      const newTodo = {
        id: Math.random(),
        title: todoTitle,
        completed: false,
      }

      setTodos( todos => [...todos, newTodo]);
      setTodoTitle('');
    }

     function completedTodo(id: number){
       const todoComplete = todos.map(todo => 
          todo.id === id ? {...todo, completed: !todo.completed} : todo
         )
       setTodos(todoComplete);
     }


    function deleteTodo(id: number){
      const todoDelete = todos.filter(todo => todo.id !== id);

      setTodos(todoDelete);
    }

    return(
      <Container>
        <TodoContainer>
        <Title>To do</Title>
      <Create
        onSubmit={createNewTodo}
      >
        <CreateTodo
          onChange={e => setTodoTitle(e.target.value)}
          value={todoTitle}
          autoFocus
          placeholder='Add a new todo'
        />
        <CreateButton
          disabled={todoTitle.trim() === ''}
          type='submit'
        >
          <AiOutlinePlusCircle 
          size={30} 
          />
        </CreateButton>
      </Create>

      <Todos>
        <TodoCompleted>
          <strong>
            Completed
            <span style={{margin: 5}}>
              {todos.filter(todo => todo.completed).length} of {todos.length}
            </span>
          </strong>
        </TodoCompleted>

        {!todos.length ? (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <strong style={{margin: 10}}>
            You don't have to do yet
            </strong>
            <p>Create to do</p>
          </div>
        ) : (
          todos.map(todo => {
            return (
              <TodosList
                key={todo.id}
              >
                <Todo>
                  <input
                    type='checkbox'
                    checked={todo.completed}
                    onChange={() => completedTodo(todo.id)}
                  />
                  
                  <TodoText
                    style={{textDecoration: todo.completed ? 'line-through' : 'none',
                    textAlign: 'left'
                    
                  }}
                  >{todo.title}</TodoText>
                <Buttons>
                <DeleteButton
                  onClick={() => deleteTodo(todo.id)}
                >
                 <AiOutlineDelete 
                  size={25}
                 />
                </DeleteButton>
                </Buttons>
                </Todo>
              </TodosList>
            )
          })
        )}
      </Todos>
     </TodoContainer>
    </Container>
  )
}
export default TodoPage;
