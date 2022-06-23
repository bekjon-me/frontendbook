import React from 'react';
import Banner from '../../components/Banner/Banner';
import Collections from '../../components/Collections/Collections';
import Header from '../../components/Header/Header';
import TagsList from '../../components/TagsList/TagsList';

const Home = () => {
  return (
    <div className="container">
      <Header />
      <Banner />
      <Collections />
      <TagsList />
    </div>
  );
};

export default Home;
