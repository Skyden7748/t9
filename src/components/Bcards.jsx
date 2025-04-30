import React from 'react';

function Bcards({ items, className }) {
  return (
    <div>
      {items.map((item, index) => (
        <div
          key={index}
          className={`text-white p-10 w-[90%] mx-auto mb-4 xl:w-[70%] [border:1px_solid_rgba(255,255,255,.1)] rounded-xl ${className}`}
        >
          <h1>{item.heading}</h1>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
}

export default Bcards;
