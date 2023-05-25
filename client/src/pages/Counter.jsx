import React, { useState } from 'react';
import Header from './Header';

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="flex flex-col min-h-screen">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <div className="flex justify-center">
          <div className="flex flex-col">
            <div className="bg-gray-200 p-4 mb-4">
              <p>Count: {count}</p>
            </div>
            <div className="bg-gray-200 p-4 mb-4">
              <div className="flex space-x-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleIncrement}>
                  Increment
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleDecrement}>
                  Decrement
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
}

export default Counter;