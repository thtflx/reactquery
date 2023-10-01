import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice';

const Todos = () => {
    const todos = useSelector(state => state.todos); // использует `useSelector` для получения массива задач из хранилища Redux
    const dispatch = useDispatch(state => state.todos); // использует `useDispatch` для создания функции-диспетчера для отправки действий в хранилище Redux

    return (
        <div>
            <h1>Todos</h1>
            {todos.map((todo) => (
                <ul className='list-none'>
                    <li
                        className='mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded w-[100%] max-w-2xl'
                        key={todo.id}
                    >
                        <h1 className='text-white'>{todo.text}</h1>
                        <button
                            onClick={() => dispatch(removeTodo(todo.id))}
                            className='text-white bg-red-500 border-0 py-1 px-2 rounded text-[12px] font-mono'
                        >
                            Delete
                        </button>
                    </li>
                </ul>
            ))}
        </div>
    )
}

export default Todos
