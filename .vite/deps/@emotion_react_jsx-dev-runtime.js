import {
  require_jsx_dev_runtime
} from "./chunk-OGSXXHZC.js";
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

// .yarn/__virtual__/@emotion-react-virtual-f644446726/4/.yarn/berry/cache/@emotion-react-npm-11.11.4-52eda8b8fe-10c0.zip/node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js
var ReactJSXRuntimeDev = __toESM(require_jsx_dev_runtime());
var import_react = __toESM(require_react());
var import_hoist_non_react_statics = __toESM(require_hoist_non_react_statics_cjs());
var Fragment2 = ReactJSXRuntimeDev.Fragment;
function jsxDEV2(type, props, key, isStaticChildren, source, self) {
  if (!hasOwn.call(props, "css")) {
    return ReactJSXRuntimeDev.jsxDEV(type, props, key, isStaticChildren, source, self);
  }
  return ReactJSXRuntimeDev.jsxDEV(Emotion$1, createEmotionProps(type, props), key, isStaticChildren, source, self);
}
export {
  Fragment2 as Fragment,
  jsxDEV2 as jsxDEV
};
//# sourceMappingURL=@emotion_react_jsx-dev-runtime.js.map
