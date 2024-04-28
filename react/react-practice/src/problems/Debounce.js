import React from "react";
import useDebounce from "../hooks/useDebounce";

const Debounce = () => {
  const onChange = (e) => {
    console.log(e.target.value);
  };

  const debounceSearch = useDebounce(onChange, 500);
  return (
    <>
      <div>Debounce</div>
      <input onChange={debounceSearch} />
    </>
  );
};

export default Debounce;
