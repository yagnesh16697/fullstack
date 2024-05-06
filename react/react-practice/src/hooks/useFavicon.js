import { useEffect } from "react";
const useFavicon = (url) => {
  useEffect(() => {
    let link = document.querySelector("link[rel*='icon']");
    if (link) {
      link.href = url;
    } else {
      link.href = document.createElement("link");
      link.type = "image/x-icon";
      link.rel = "icon";
      link.href = url;
    }
  }, [url]);
};

export default useFavicon;
