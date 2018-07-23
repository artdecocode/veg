import { equal, ok } from 'zoroaster/assert'
import Context from '../context'
import veg from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof veg, 'function')
  },
  async 'calls package without error'() {
    await veg()
  },
  async 'gets a link to the fixture'({ FIXTURE }) {
    const res = await veg({
      type: FIXTURE,
    })
    ok(res, FIXTURE)
  },
}

export default T
