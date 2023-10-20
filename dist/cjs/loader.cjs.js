'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4df65e9b.js');

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return undefined;
  return index.bootstrapLazy([["button-component.cjs",[[1,"button-component"]]],["my-component.cjs",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]]], options);
};

exports.setNonce = index.setNonce;
exports.defineCustomElements = defineCustomElements;

//# sourceMappingURL=loader.cjs.js.map