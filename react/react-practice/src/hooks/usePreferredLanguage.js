import { useSyncExternalStore } from "react";
//useSyncExternalStore is a React Hook that lets you subscribe to an external store.

//The subscribe function should subscribe to the store and return a function that unsubscribes.
const subscribe = (cb) => {
  window.addEventListener("languagechange", cb);
  return () => window.removeEventListener("languagechange", cb);
};

//The getSnapshot function should read a snapshot of the data from the store.
const getSnapshot = () => {
  return window.navigator.language;
};

//optional getServerSnapshot: A function that returns the initial snapshot of the data in the store. It will be used only during server rendering and during hydration of server-rendered content on the client. The server snapshot must be the same between the client and the server, and is usually serialized and passed from the server to the client. If you omit this argument, rendering the component on the server will throw an error.
const getServerSnapshot = () => {
  throw Error("usePreferredLanguage is not available in server side");
};

const usePreferredLanguage = () => {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
};

export default usePreferredLanguage;
