import React from 'react'

const Widget = ({ widget, onRemove }) => (
    <div className='bg-white rounded-lg shadow-lg p-10 relative'>
        <div className='text-2xl font-bold text-center'>{widget.title}</div>
        <div className='mt-5'>{widget.content}</div>
        <button
            className='absolute top-2 right-2 bg-red-500 text-white rounded-xl p-2 w-[10%]'
            onClick={onRemove}
        >
            X
        </button>
    </div>
);

export default Widget