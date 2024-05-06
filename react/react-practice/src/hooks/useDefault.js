import { useState } from "react";

const useDefault = (initialValue, defaultValue) => {
  const [state, setState] = useState(initialValue);

  if (state === undefined || state === null) {
    return [defaultValue, setState];
  }

  return [state, setState];
};

export default useDefault;
