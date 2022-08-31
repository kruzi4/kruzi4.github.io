import React, {useState} from 'react';
import Category from "./Category";

const CategoryList = ({categories, selectedCategory, select}) => {
    return (
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
            {categories ?
                categories.map(category =>
                    <Category
                        key={category}
                        name={category}
                        isSelected={selectedCategory === category}
                        select={select}
                    />
                )
                :
                <span>Loading...</span>
            }
        </div>
    )
}

export default CategoryList;