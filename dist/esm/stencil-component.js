import { p as promiseResolve, b as bootstrapLazy } from './index-1ab4d01d.js';
export { s as setNonce } from './index-1ab4d01d.js';

/*
 Stencil Client Patch Browser v4.5.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["button-component",[[1,"button-component"]]],["my-component",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]]], options);
});

//# sourceMappingURL=stencil-component.js.map