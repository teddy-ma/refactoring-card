import React from 'react';

const Detail = ({name, page}) => {
  const code = `/code/${name}.png`;
  const title = name.replace(/-/g, ' ');

  return (
    <div className="">
      <h2>{title}</h2>
      <img src={code} alt={code} />
      { page && (<h5> page {page} </h5>) }
    </div>
  );
};

export default Detail;
