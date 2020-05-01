/**
 * ClickOutside custom directive binds the window click event to
 * check whether clicked target is inside the :use node. If no,
 * call a callback()
 *
 * @param {element} node - The element on which you'd like to check the position
 * @param {function} callback - execute function on click outside
 */

const clickOutside = (node, callback) => {
  window.addEventListener('click', (event) => {
    if (!event.target.closest(elToSelector(node))) callback();
  });
};
export default clickOutside;

const elToSelector = (el) => {
  let tagInsides = el.outerHTML.match(/<([^>]*)>/)[1];
  if (!tagInsides) return '';

  let res = '';
  res += tagInsides.split(' ')[0];
  const attrs = tagInsides.match(/( [^:=]+="[^"]+")/g) || [];
  attrs.forEach(str => res += `[${str.trim()}]`);
  return res;
};
