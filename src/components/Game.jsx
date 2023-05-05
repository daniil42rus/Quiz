import React from 'react';

export const Game = ({ step, question, onClickValue, length }) => {
  const procentage = Math.round((step / length) * 100);

  return (
    <>
      <div className="progress">
        <div
          style={{ width: `${procentage}%` }}
          className="progress__inner"
        ></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((val, id) => (
          <li key={id} onClick={() => onClickValue(id)}>
            {val}
          </li>
        ))}
      </ul>
    </>
  );
};
