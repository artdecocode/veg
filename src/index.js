import { debuglog } from 'util'

const LOG = debuglog('veg')

/**
 * Building projects in Node.js.
 * @param {Config} config Configuration object.
 * @param {string} config.type The type.
 */
export default async function veg(config = {}) {
  const {
    type,
  } = config
  LOG('veg called with %s', type)
  return type
}

/**
 * @typedef {Object} Config
 * @property {string} type The type.
 */
