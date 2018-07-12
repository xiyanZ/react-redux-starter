export default {
  '/': {
    component: () => import('~routes/BlogPage'),
    exact: true
  },
  '/new': {
    component: () => import('~routes/NewPost'),
    exact: true
  },
  '/posts/:id': {
    component: () => import('~routes/Detail'),
    exact: true
  }
}
