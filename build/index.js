"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = veg;

var _util = require("util");

const LOG = (0, _util.debuglog)('veg');
/**
 * Building projects in Node.js.
 * @param {Config} config Configuration object.
 * @param {string} config.type The type.
 */

async function veg(config = {}) {
  const {
    type
  } = config;
  LOG('veg called with %s', type);
  return type;
}
/**
 * @typedef {Object} Config
 * @property {string} type The type.
 */
//# sourceMappingURL=index.js.map