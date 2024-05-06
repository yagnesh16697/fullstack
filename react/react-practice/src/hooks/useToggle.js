import { useCallback, useState } from "react";
/**
 * const [on, setOn] = useToggle(true)
 * setOn()
 * setOn()
 * setOn(false) => false
 * setOn(true) => true
 * setOn("state value") => false
 */
const useToggle = (initialValue = true) => {
  const [on, setOn] = useState(() => {
    if (typeof initialValue === "boolean") {
      return initialValue;
    } else {
      return Boolean(initialValue);
    }
  });

  const handleToggle = useCallback(
    (value) => {
      if (typeof value === "boolean") {
        return setOn(value);
      }
      return setOn((prev) => !prev);
    },
    [setOn]
  );

  return [on, handleToggle];
};

export default useToggle;
