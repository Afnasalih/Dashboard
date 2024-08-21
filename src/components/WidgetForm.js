import React from 'react'

const WidgetForm = ({ onSubmit, onChange, newWidget }) => (
    <div className='fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center'>
        <div className='bg-white p-10 rounded-lg'>
            <h2 className='text-xl font-bold mb-4'>Add New Widget</h2>
            <form onSubmit={onSubmit}>
                <div className='mb-4'>
                    <label className='block mb-2'>Widget Name</label>
                    <input
                        type='text'
                        name='title'
                        value={newWidget.title}
                        onChange={onChange}
                        className='p-2 border rounded-lg w-full'
                        required
                    />
                </div>
                <div className='mb-4'>
                    <label className='block mb-2'>Widget Text</label>
                    <textarea
                        name='content'
                        value={newWidget.content}
                        onChange={onChange}
                        className='p-2 border rounded-lg w-full'
                        required
                    />
                </div>
                <div className='flex justify-end'>
                    <button type='submit' className='bg-blue-500 text-white p-2 rounded-lg'>Add Widget</button>
                </div>
            </form>
        </div>
    </div>
);


export default WidgetForm