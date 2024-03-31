import { expect } from 'expect'
import toMatchSnapshot from 'expect-mocha-snapshot'
import { describe, it } from 'mocha'
import { battery } from './battery.js'

expect.extend({ toMatchSnapshot })

describe('erm', () => {
  for (const [testName, [turtle, term]] of Object.entries(battery)) {
    it(`Test ${testName}`, function () {
      expect([testName, turtle, term]).toMatchSnapshot(this)
    })
  }
})
