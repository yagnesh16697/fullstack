const cachedApiCall = (time) => {
  const cache = {};

  return async (url, config = {}) => {
    const key = `${url}${JSON.stringify(config)}`;
    const entry = cache[key];
    if (!entry || Date.now() > entry.expiry) {
      try {
        const response = await fetch(url, config);
        const data = await response.json();
        cache[key] = { value: data, expiry: Date.now() + time };
        return cache[key].value;
      } catch (e) {
        console.log("error while making api call", e);
      }
    } else {
      console.log("using cache");
      return cache[key].value;
    }
  };
};

const call = cachedApiCall(1500);
call("https://jsonplaceholder.typicode.com/todos/1", {}).then((a) =>
  console.log("1", a)
);
setTimeout(() => {
  call("https://jsonplaceholder.typicode.com/todos/1", {}).then((a) =>
    console.log("2", a)
  );
}, 800);
