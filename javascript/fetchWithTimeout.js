const fetchWithTimeout = (url, duration) => {
  return new Promise((resolve, reject) => {
    const controller = new AbortController();
    const signal = controller.signal;
    let timerId = null;

    fetch(url, { signal })
      .then((resp) => {
        resp
          .json()
          .then((r) => {
            clearTimeout(timerId);
            resolve(r);
          })
          .catch((error) => {
            reject(error);
          });
      })
      .catch((error) => {
        reject(error);
      });

    timerId = setTimeout(() => {
      controller.abort();
    }, duration);
  });
};

fetchWithTimeout("https://jsonplaceholder.typicode.com/posts/1", 30)
  .then((resp) => {
    console.log(resp);
  })
  .catch((error) => {
    console.log(error);
  });
