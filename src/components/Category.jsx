import React from 'react';

const Category = ({name, isSelected, select}) => {
    return (
        <div
            className={"category-tag" + (isSelected ? ' active' : '')}
            onClick={() => select(name)}
        >{name}</div>
    );
};

export default Category;