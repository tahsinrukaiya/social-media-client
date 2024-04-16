/*exports an object containing mocked implementations of
 the setItem, getItem, and removeItem methods.The export
  default syntax is used to export this object as the default
   export of the module */

export default {
  setItem: jest.fn((key, value) => (localStorage[key] = value)),
  getItem: jest.fn((key) => localStorage[key] || null),
  removeItem: jest.fn((key) => delete localStorage[key]),
};
