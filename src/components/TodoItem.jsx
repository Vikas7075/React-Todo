import React from 'react'

const TodoItem = ({ title, description, isCompleted, updateHandler, deleteHandler, id }) => {
    return (
        <div className='bg-gray-100 p-4 rounded-md shadow-md flex justify-between items-center mb-4 mt-4'>
            <div>
                <h4 className='text-lg font-bold text-lime-500'>{title}</h4>
                <p className={`text-gray-600 ${isCompleted ? 'line-through' : ''}`}>{description}</p>
            </div>
            <div className='flex items-center justify-center'>
                <input
                    type='checkbox'
                    onChange={() => updateHandler(id)}
                    checked={isCompleted}
                    className='mr-2 cursor-pointer'
                />
                <button onClick={() => deleteHandler(id)} className='btn bg-red-500 text-white px-2 py-1 rounded cursor-pointer'>
                    Delete
                </button>
            </div>
        </div>

    )
}

export default TodoItem