import React from 'react'
import Widget from './Widget';

const Category = ({ category, onAddWidgetClick, onRemoveWidget }) => (
    <div className='mt-6'>
        <div className='ml-20 text-md'>{category.name}</div>
        <div className='h-auto p-4 w-full flex justify-center items-center'>
            <div className='h-[90%] w-[90%] p-5 rounded-lg bg-gray-200 grid lg:grid-cols-3 gap-5 shadow-lg'>
                {category.widgets.map((widget, widgetIndex) => (
                    <Widget
                        key={widgetIndex}
                        widget={widget}
                        onRemove={() => onRemoveWidget(widgetIndex)}
                    />
                ))}
                <div className='bg-gray-100 rounded-lg p-7 flex justify-center shadow-lg items-center'>
                    <button
                        className='h-[40px] w-[40%] bg-white border-2 shadow-md hover:bg-gray-400 hover:text-white rounded-lg'
                        onClick={onAddWidgetClick}
                    >
                        Add Widget
                    </button>
                </div>
            </div>
        </div>
    </div>
);

export default Category