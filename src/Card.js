import React, { useState } from 'react';
import ReactModal from 'react-modal';
import Detail from './Detail';

const Card = ({name, page}) => {
  const src = `/cards/${name}.png`
  const [show, setShow] = useState(false);

  const handleOpenModal = () => {
    setShow(true)
  }

  const handleCloseModal = () => {
    setShow(false)
  }

  ReactModal.setAppElement('#root');
  return (
    <div className="column card">
      <img src={src} alt={src} />
      {/* <p>{name}</p> */}
      <br />
      <button className="showBtn" onClick={handleOpenModal}>查看详情</button>
      <ReactModal isOpen={show} >
        <button className="closeBtn" onClick={handleCloseModal}>x</button>
        <Detail name={name} page={page} />
      </ReactModal>
    </div>
  );
};

export default Card;
