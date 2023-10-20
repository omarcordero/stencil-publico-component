'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4df65e9b.js');

/*
 Stencil Client Patch Browser v4.5.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('stencil-component.cjs.js', document.baseURI).href));
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["button-component.cjs",[[1,"button-component"]]],["my-component.cjs",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]]], options);
});

exports.setNonce = index.setNonce;

//# sourceMappingURL=stencil-component.cjs.js.map