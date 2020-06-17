import React from 'react';
import './directory.style.css'
import CollectionPreview from '../collection-preview/collection-preview.component'

const Directory = ({ collections }) => {
  
  return (
    <div className='collection-overview'>
            {collections.map(({id, ...otherCollectionProps})=>(
               <CollectionPreview key={id} {...otherCollectionProps} />
            ))}           
        </div>
  );
};

export default Directory;
