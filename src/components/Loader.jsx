import React from 'react'

function Loader() {
    return (
        <div className='flex items-center justify-center h-screen'>
            <svg
                className='animate-spin h-12 w-12 text-indigo-600'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
            >
                <circle
                    className='opacity-25'
                    cx='12'
                    cy='12'
                    r='10'
                    stroke='currentColor'
                    strokeWidth='4'
                ></circle>
                <path
                    className='opacity-75'
                    fill='currentColor'
                    d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 010 12H0c0 6.627 5.373 12 12 12v-4.309zM20 12a8 8 0 01-8 8v4c6.627 0 12-5.373 12-12h-4zm-2-5.291A7.962 7.962 0 0124 12h0c0-6.627-5.373-12-12-12v4.309z'
                ></path>
            </svg>
        </div>
    )
}

export default Loader