import React from 'react';

export const Result = ({ correct, length }) => {
  return (
    <div className="result">
      <img
        src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"
        alt=""
      />
      <h2>
        Вы отгадали {correct} ответа из {length}
      </h2>
      <a href="/">
        <button>Попробовать снова</button>
      </a>
    </div>
  );
};
