import React from 'react'
import Widget from './Widget'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
function Category({category, onRemoveWidget, onAddWidget }) {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
    
  return (
    <div className='bg-white flex flex-col shadow-md rounded-lg p-4 mb-6 ml-4 mr-4'>
     <div className='flex flex-row justify-between'>
        <div>
        {category.name}
        </div>
        <button
            onClick={() => onAddWidget(category.id)}
            className="flex-shrink-0 w-32 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md"
          >
            + Add Widget
          </button>

     </div>
        <Slider {...settings}>
        {category.widgets.map((e)=>(<Widget key={e.id}
              widget={e}
              onRemove={() => onRemoveWidget(category.id, e.id)}/>))}
        </Slider>
    </div>
  )
}

export default Category
