import React from 'react';
import { useHistory } from 'react-router-dom';

const NewCardBtn = () => {
  const history = useHistory();
  const handleClick = () => history.push('/newCard');

  return (
    <button type="button" onClick={handleClick}>
      New Card
    </button>
  );
};

export default NewCardBtn;
