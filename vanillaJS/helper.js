export const on = (element, eventName, handler) => {
  element.addEventListener(eventName, handler);
};
export const emit = (element, eventName, data) => {};
export const qs = () => {
  return document.querySelector(...arguments);
};

export const qsAll = () => {
  return document.querySelectorAll(...arguments);
};
