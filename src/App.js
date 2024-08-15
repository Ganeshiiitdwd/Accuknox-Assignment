import React, { useState } from 'react';
import Navbar from './components/Navbar';
import data from './data.json';
import Category from './components/Category';
import WidgetModal from './components/WidgetModal';

function App() {
  const [category, setCategory] = useState(data.categories);
  const [showModal, setShowModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchResults, setSearchResults] = useState([]); // State to store search results

  const addWidget = (categoryId, widget) => {
    const updatedCategory = category.map(cat => {
      if (cat.id === categoryId) {
        return { ...cat, widgets: [...cat.widgets, widget] };
      }
      return cat;
    });
    setCategory(updatedCategory);
  };

  const removeWidget = (categoryId, widgetId) => {
    const updatedCategory = category.map(cat => {
      if (cat.id === categoryId) {
        return { ...cat, widgets: cat.widgets.filter(w => w.id !== widgetId) };
      }
      return cat;
    });
    setCategory(updatedCategory);
  };

  const addWidgetHandler = (categoryId) => {
    setSelectedCategory(categoryId);
    setShowModal(true);
  };

  const widgetAddHandler = (widget) => {
    addWidget(selectedCategory, widget);
    setShowModal(false);
  };

  const handleSearch = (query) => {
    if (!query) {
      setSearchResults([]); // Clear search results if query is empty
      return;
    }
  // flatMap combines the results into one array
    const results = category.flatMap(cat =>
      cat.widgets.filter(widget =>
        widget.name.toLowerCase().includes(query.toLowerCase())
      )
    );
    setSearchResults(results);
  };

  return (
    <div>
      <Navbar onSearch={handleSearch} />
      {/* Display search results below the search bar */}
      {searchResults.length > 0 && (
        <div className="search-results">
          {searchResults.map(widget => (
            <div key={widget.id} className="p-2 bg-gray-200 rounded-md shadow mb-2">
              {widget.name}
            </div>
          ))}
        </div>
      )}
      <div>
        {category.map(e => (
          <Category
            key={e.id}
            category={e}
            onRemoveWidget={removeWidget}
            onAddWidget={addWidgetHandler}
          />
        ))}
      </div>
      {showModal && (
        <WidgetModal onAddWidget={widgetAddHandler} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
}

export default App;
