import React from 'react';
import { Router, Route } from 'dva/router';
import Login from './routes/Login';
import Main from './routes/Main';
import Path from './routes/path';


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={Login} />
      <Route path="/main" component={Main} />
      <Route path="/path" component={Path} />
    </Router>
  );
}

export default RouterConfig;

// import React from 'react'
// import PropTypes from 'prop-types'
// import { Router } from 'dva/router'
// import Login from './routes/Login'
// import Main from './routes/Main'
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
//       getIndexRoute(location, callback) {
//         require.ensure([], function (require) {
//           callback(null, require('./routes/Login'))
//         })
//       },
//       // getIndexRoute (nextState, cb) {
//       //   require.ensure([], require => {
//       //     registerModel(app, require('./models/app'))
//       //     cb(null, { component: require('./routes/Login') })
//       //   })
//       // },
//       // getChildRoutes(location, callback) {
//       //    require.ensure([], function (require) {
//       //      callback(null, [
//       //        require('./routes/Main')
//       //      ])
//       //    })
//       //  },
//       // getComponent(nextState, cb) {
//       //   require.ensure([], (require) => {
//       //     cb(null, require('components/Main'))
//       //   }, 'Main')
//       // },
//       // childRoutes: [
//       //   require('./routes/Main')
//       // ]
//       childRoutes: [
//         {
//           getComponent (nextState, cb) {
//             require.ensure([], require => {
//               registerModel(app, require('./models/main'))
//               cb(null, require('./routes/Main'))
//             },'main')
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
