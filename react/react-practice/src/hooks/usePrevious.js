import { useState } from "react";
/**
 * This will keep track of the previous value it will be usefull in getting the previous value of the state
 *
 */
const usePrevious = (value) => {
  const [currVal, setCurrVal] = useState(value);
  const [prevVal, setPrevVal] = useState(null);

  if (value !== currVal) {
    setPrevVal(currVal);
    setCurrVal(value);
  }

  return prevVal;
};

export default usePrevious;
