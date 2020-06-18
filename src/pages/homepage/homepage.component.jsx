import React, { useContext } from 'react';
import Directory from '../../components/directory/directory.component'
import { Context } from '../../context/GlobalContext'

const Homepage = () => {
  const { collections } = useContext(Context)
    return (
        <Directory collections={collections}/>
    );
};

export default Homepage;