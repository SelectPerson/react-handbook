import React, { useState } from 'react';

const FuncAsChildFilter = ({ children }) => {
  const [inputValue, setInputValue] = useState("0");

  // Преобразуем строку в число, если это возможно
  const parsedFilter = parseInt(inputValue);
  const isValidNumber = !isNaN(parsedFilter);

  return (
    <div>
      <input
        type="text"
        placeholder="Filter car cost"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      {children(isValidNumber ? parsedFilter : 0)}
    </div>
  );
};

export default FuncAsChildFilter;
