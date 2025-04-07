var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};

// src/Builder.ts
function Builder(typeOrTemplate, templateOrOverride, override) {
  let type;
  let template;
  let overrideValues;
  if (typeOrTemplate instanceof Function) {
    type = typeOrTemplate;
    template = templateOrOverride;
    overrideValues = override;
  } else {
    template = typeOrTemplate;
    overrideValues = templateOrOverride;
  }
  const built = template ? Object.assign({}, template) : {};
  const builder = new Proxy(
    {},
    {
      get(target, prop) {
        if ("build" === prop) {
          if (overrideValues) {
            Object.assign(built, overrideValues);
          }
          if (type) {
            const obj = new type();
            return () => Object.assign(obj, __spreadValues({}, built));
          } else {
            return () => built;
          }
        }
        return (...args) => {
          if (0 === args.length) {
            return built[prop.toString()];
          }
          built[prop.toString()] = args[0];
          return builder;
        };
      }
    }
  );
  return builder;
}

// src/StrictBuilder.ts
function StrictBuilder() {
  const built = {};
  const strictbuilder = new Proxy(
    {},
    {
      get(target, prop) {
        if ("build" === prop) {
          return () => built;
        }
        return (...args) => {
          if (0 === args.length) {
            return built[prop.toString()];
          }
          built[prop.toString()] = args[0];
          return strictbuilder;
        };
      }
    }
  );
  return strictbuilder;
}
export {
  Builder,
  StrictBuilder
};
//# sourceMappingURL=index.mjs.map