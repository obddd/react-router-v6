import React, { useState, useEffect } from 'react';
import Directory from '../../components/directory/directory.component'
import SHOP_DATA from '../../components/directory/shop.data'

const Homepage = () => {
const [collections, setCollections] = useState([]);
  useEffect(() => {
    setCollections(SHOP_DATA);
  }, []);
  console.log(collections)
    return (
        <Directory collections={collections}/>
    );
};

export default Homepage;