import React from 'react';

const ColorBlock = ({ colors }) => {
  // אם לא מועבר פרופס colors, השתמש בצבע אפור ברירת מחדל
  const backgroundColor = colors || 'gray';

  return (
    <div
      style={{
        width: '50px',
        height: '50px',
        backgroundColor: backgroundColor,
      }}
    ></div>
  );
};

export default ColorBlock;

