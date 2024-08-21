import React from 'react'

const Mheader = ({ searchTerm, onSearchChange, onWidgetClick }) => (
    <div className='h-[60px] w-[94%]  flex'>
        <div className='h-full w-[20%] flex items-center justify-center sm:text-md md:text-2xl font-bold'>
            Dashboard
        </div>
        <div className='h-full w-[50%] flex  justify-end items-center'>
            <input
                type='text'
                placeholder='Search for anything.....'
                className='p-3 h-[60%] shadow-lg rounded-lg w-[70%]'
                value={searchTerm}
                onChange={onSearchChange}
            />
        </div>
        <div className='h-full sm:w-[30px] md:w-[30%] flex justify-end items-center'>
            <button
                className='p-2 bg-blue-500 text-white rounded-lg'
                onClick={onWidgetClick}
            >
                Add Widget
            </button>
        </div>
    </div>
);

export default Mheader