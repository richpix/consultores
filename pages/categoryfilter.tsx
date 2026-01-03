import React from 'react';

interface CategoryFilterProps {
  categories: Array<{
    id: string;
    label: string;
    icon: React.ComponentType<any>;
  }>;
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  categories, 
  activeCategory, 
  setActiveCategory 
}) => {
  return (
    <div className="flex flex-wrap  gap-3">
      {categories.map((category) => {
        
        const isActive = activeCategory === category.id;
        
        return (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`
             px-4 py-2 rounded-full text-sm font-medium transition-colors
              ${isActive 
                ? 'bg-brand-blue text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }
            `}
          >
          
            <span className="font-medium">
              {category.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default CategoryFilter;