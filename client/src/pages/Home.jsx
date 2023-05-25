import React from 'react';

import Header from './Header';
import Landing from './Landing';

function Home() {
  return (
    <div className="flex flex-col min-h-screen">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <Landing />  

      </main>

    </div>
  );
}

export default Home;