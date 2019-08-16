import Content from './components/Content'
import UpcomingDates from './components/UpcomingDates'
import ErrorPage from './components/ErrorPage'
const routes = [
  { path: '/', component: Content },
  { path: '/coming-dates', component: UpcomingDates },
  { path: '*', component: ErrorPage }
]

export default routes
