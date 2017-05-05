import React from 'react';
import { Router, Route } from 'dva/router';
import Login from './routes/Login';
import Main from './routes/Main';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={Login} />
      <Route path="/main" component={Main} />
    </Router>
  );
}

export default RouterConfig;

// import React from 'react'
// import PropTypes from 'prop-types'
// import { Router } from 'dva/router'
// import Login from './routes/Login'
//
// const registerModel = (app, model) => {
//   if (!(app._models.filter(m => m.namespace === model.namespace).length === 1)) {
//     app.model(model)
//   }
// }
//
// const Routers = function ({ history, app }) {
//   const routes = [
//     {
//       path: '/',
//       component: Login,
//       getIndexRoute (nextState, cb) {
//         require.ensure([], require => {
//           registerModel(app, require('./models/app'))
//           cb(null, { component: require('./routes/Login') })
//         }, 'Login')
//       },
//       childRoutes: [
//         {
//           path: 'main',
//           getComponent (nextState, cb) {
//             require.ensure([], require => {
//               registerModel(app, require('./models/main'))
//               cb(null, require('./routes/Main'))
//             }, 'main')
//           }}
//         ],
//     },
//   ]
//
//   return <Router history={history} routes={routes} />
// }
//
// Routers.propTypes = {
//   history: PropTypes.object,
//   app: PropTypes.object,
// }
//
// export default Routers
