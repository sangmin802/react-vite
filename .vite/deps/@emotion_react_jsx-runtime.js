import {
  require_jsx_runtime
} from "./chunk-FBMWO2VE.js";
import {
  Emotion$1,
  createEmotionProps,
  hasOwn,
  require_hoist_non_react_statics_cjs
} from "./chunk-7DRDNJ3X.js";
import {
  __toESM,
  require_react
} from "./chunk-CCVGTZAU.js";

// .yarn/__virtual__/@emotion-react-virtual-f644446726/4/.yarn/berry/cache/@emotion-react-npm-11.11.4-52eda8b8fe-10c0.zip/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js
var ReactJSXRuntime = __toESM(require_jsx_runtime());
var import_react = __toESM(require_react());
var import_hoist_non_react_statics = __toESM(require_hoist_non_react_statics_cjs());
var Fragment2 = ReactJSXRuntime.Fragment;
function jsx2(type, props, key) {
  if (!hasOwn.call(props, "css")) {
    return ReactJSXRuntime.jsx(type, props, key);
  }
  return ReactJSXRuntime.jsx(Emotion$1, createEmotionProps(type, props), key);
}
function jsxs2(type, props, key) {
  if (!hasOwn.call(props, "css")) {
    return ReactJSXRuntime.jsxs(type, props, key);
  }
  return ReactJSXRuntime.jsxs(Emotion$1, createEmotionProps(type, props), key);
}
export {
  Fragment2 as Fragment,
  jsx2 as jsx,
  jsxs2 as jsxs
};
//# sourceMappingURL=@emotion_react_jsx-runtime.js.map
