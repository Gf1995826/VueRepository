import First from './child/First'
import Second from './child/Second'
import Thrid from './child/Thrid'
import Fourth from './child/Fourth'
export default {
  routes: [
    { path: '/', redirect: 'first' },
    {
      path: 'first',
      name: 'First',
      component: First
    },
    {
      path: 'second',
      name: 'second',
      component: Second
    },
    {
      path: 'third',
      name: 'third',
      component: Thrid
    },
    {
      path: 'fourth',
      name: 'Tourth',
      component: Fourth
    }
  ]
}
