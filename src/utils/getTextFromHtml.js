export const getTextFromHtml = (html) =>
  new DOMParser().parseFromString(html, "text/html").documentElement
    .textContent;
