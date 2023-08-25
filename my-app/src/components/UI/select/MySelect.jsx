import React from 'react';

const MySelect = ({options, defaultValue}) => {
  return (
    <select>
      <option disabled>
        {defaultValue}
      </option>
      {options.map(option => 
       <option value={option.value}>
         {option.name}
       </option>)
      }
    </select>
    );
};

export default MySelect;
