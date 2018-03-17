/**
 * checks if the components that shall be used are
 * either are Function or a React Component
 */

import React from 'react'
import assert from 'assert'

export default function(arrayOfComponetsToTest) {
  assert(arrayOfComponetsToTest instanceof Array)
  arrayOfComponetsToTest.forEach((component) => {
      assert(component instanceof Function || component instanceof React.Component)
  })
}
