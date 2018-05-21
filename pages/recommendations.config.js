import Recommendations from '../recommendations/component';
import assert from 'assert'
assert(Recommendations)

console.log(Recommendations);

export default {
  route: '/recommendations',
  view: Recommendations,
  htmlStatic: true,
  domStatic: true,
};
