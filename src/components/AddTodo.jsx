import React, { useState } from 'react'
import { Fragment } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

const AddTodo = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!input) {
            return;
        }

        dispatch(addTodo(input));
        setInput('');
    }

    return (
        <Fragment>
            <h1 className='mt-5 text-3xl font-mono font-bold text-indigo-700'>Redux</h1>
            <form className='space-x-3 mt-2' onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Enter a todo'
                    className='bg-gray-800 rounded border border-gray-700 text-gray-100 py-1 px-3 leading-8'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button
                    className='text-white font-mono bg-indigo-500 border-0 py-2 px-6 rounded text-lg'
                >
                    Add todo
                </button>
            </form>
        </Fragment>
    )
}

export default AddTodo
