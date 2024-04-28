import { useCallback, useRef } from "react";

const useDebounce = (fn, delay, option = { leading: true, trailing: true }) => {
  let timeOut = useRef(null);
  let isLeadingInvoked = useRef(false);

  const debounce = useCallback(
    function () {
      const context = this;
      const args = arguments;

      clearTimeout(timeOut.current);

      if (option.leading && !timeOut.current) {
        fn.apply(context, args);
        isLeadingInvoked.current = true;
      } else {
        isLeadingInvoked.current = false;
      }

      timeOut.current = setTimeout(() => {
        if (option.trailing && !isLeadingInvoked.current) {
          fn.apply(context, args);
        }

        timeOut.current = null;
      }, delay);
    },
    [fn, delay, option]
  );
  return debounce;
};

export default useDebounce;
