import React from 'react'

const SlidingDiv = ({ categories, selectedCategory, selectedWidgets, onCategorySelect, onWidgetToggle, onConfirm, onCancel,}) => (
    <div className='fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-end'>
        <div className='bg-white w-[40%] h-full p-6'>
            <h2 className='text-xl font-bold mb-4'>Add Widgets</h2>
            <div className='mb-4 flex'>
                {categories.map((category, index) => (
                    <button
                        key={index}
                        onClick={() => onCategorySelect(category)}
                        className={`p-2 rounded-lg m-2 ${category.name === selectedCategory?.name ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                    >
                        {category.name}
                    </button>
                ))}
            </div>
            <div className='space-y-4'>
                {selectedCategory && selectedCategory.widgets.map((widget, index) => (
                    <div key={index} className='flex items-center'>
                        <input
                            type='checkbox'
                            checked={selectedWidgets.some(w => w.title === widget.title)}
                            onChange={() => onWidgetToggle(widget)}
                        />
                        <span className='ml-2'>{widget.title}</span>
                    </div>
                ))}
            </div>
            <div className='mt-4 flex justify-end'>
                <button
                    className='bg-blue-500 text-white mr-5 p-3 rounded-lg'
                    onClick={onConfirm}
                >
                    Confirm
                </button>
                <button
                    className='bg-gray-500 text-white p-3 rounded-lg'
                    onClick={onCancel}
                >
                    Cancel
                </button>
            </div>
        </div>
    </div>
);

export default SlidingDiv