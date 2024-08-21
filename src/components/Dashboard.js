import React, { useState, useMemo } from 'react';
import initialData from '../components/data.json';
import Mheader from '../components/Mheader';
import Category from './Category';
import WidgetForm from './WidgetForm';
import SlidingDiv from './SlidingDiv';
const Dashboard = () => {
    const [dashboardData, setDashboardData] = useState(initialData);
    const [newWidget, setNewWidget] = useState({ title: '', content: '' });
    const [showForm, setShowForm] = useState(false);
    const [activeCategoryIndex, setActiveCategoryIndex] = useState(null);
    const [showSlidingDiv, setShowSlidingDiv] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedWidgets, setSelectedWidgets] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const handleAddWidgetClick = (categoryIndex = null) => {
        setActiveCategoryIndex(categoryIndex);
        setShowForm(true);
    };

    const handleWidgetClick = () => {
        setShowSlidingDiv(true);
        if (dashboardData.categories.length > 0) {
            const firstCategory = dashboardData.categories[0];
            setSelectedCategory(firstCategory);
            setSelectedWidgets(firstCategory.widgets);
        }
    };

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        setSelectedWidgets(category.widgets);
    };

    const handleWidgetToggle = (widget) => {
        const isSelected = selectedWidgets.some(w => w.title === widget.title);
        const updatedWidgets = isSelected
            ? selectedWidgets.filter(w => w.title !== widget.title)
            : [...selectedWidgets, widget];

        setSelectedWidgets(updatedWidgets);

        const updatedCategories = dashboardData.categories.map((category) => {
            if (category.name === selectedCategory.name) {
                return {
                    ...category,
                    widgets: updatedWidgets,
                };
            }
            return category;
        });

        setDashboardData({ ...dashboardData, categories: updatedCategories });
    };

    const handleConfirm = () => {
        setShowSlidingDiv(false);
    };

    const handleCancel = () => {
        setShowSlidingDiv(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewWidget({ ...newWidget, [name]: value });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const updatedCategories = dashboardData.categories.map((category, index) => {
            if (index === activeCategoryIndex) {
                return { ...category, widgets: [...category.widgets, newWidget] };
            }
            return category;
        });
        setDashboardData({ ...dashboardData, categories: updatedCategories });
        setNewWidget({ title: '', content: '' });
        setShowForm(false);
    };

    const removeWidget = (categoryIndex, widgetIndex) => {
        const updatedCategories = dashboardData.categories.map((category, index) => {
            if (index === categoryIndex) {
                const updatedWidgets = category.widgets.filter((_, idx) => idx !== widgetIndex);
                return { ...category, widgets: updatedWidgets };
            }
            return category;
        });
        setDashboardData({ ...dashboardData, categories: updatedCategories });
    };

    const filteredCategories = useMemo(() => {
        return dashboardData.categories.map((category) => ({
            ...category,
            widgets: category.widgets.filter((widget) =>
                widget.title.toLowerCase().includes(searchTerm.toLowerCase())
            ),
        }));
    }, [dashboardData, searchTerm]);

    return (
        <div className='h-auto p-2 bg-blue-200 w-screen'>
            <Mheader
                searchTerm={searchTerm}
                onSearchChange={(e) => setSearchTerm(e.target.value)}
                onWidgetClick={handleWidgetClick}
            />
            {filteredCategories.map((category, categoryIndex) => (
                <Category
                    key={categoryIndex}
                    category={category}
                    onAddWidgetClick={() => handleAddWidgetClick(categoryIndex)}
                    onRemoveWidget={(widgetIndex) => removeWidget(categoryIndex, widgetIndex)}
                />
            ))}
            {showForm && (
                <WidgetForm
                    newWidget={newWidget}
                    onChange={handleInputChange}
                    onSubmit={handleFormSubmit}
                />
            )}
            {showSlidingDiv && (
                <SlidingDiv
                    categories={dashboardData.categories}
                    selectedCategory={selectedCategory}
                    selectedWidgets={selectedWidgets}
                    onCategorySelect={handleCategorySelect}
                    onWidgetToggle={handleWidgetToggle}
                    onConfirm={handleConfirm}
                    onCancel={handleCancel}
                />
            )}
        </div>
    );
};

export default Dashboard;


