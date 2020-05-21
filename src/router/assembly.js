import Loadable from '@@/Loadable'

const Home = Loadable(() => import('@/pages/home'))
const Login = Loadable(() => import('@/pages/login'))
const Sigin = Loadable(() => import('@/pages/Sigin'))
const Echart = Loadable(() => import('@/pages/echart'))
const Table = Loadable(() => import('@/pages/table'))
const From = Loadable(() => import('@/pages/from'))
const Sample = Loadable(() => import('@/pages/sample'))
export {
  Home,
  Login,
  Sigin,
  Echart,
  Table,
  From,
  Sample,
}
