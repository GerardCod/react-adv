import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
  Navigate
} from 'react-router-dom';

import { routes, Route as RouteInterface } from './routes';

import logo from '../logo.svg';
import { Suspense } from 'react';

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading</span>}>
      <Router>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />
            <ul>
              {
                routes.map((route: RouteInterface) => (
                  <li key={`route: ${route.to}`}>
                    <NavLink to={route.to} className={({ isActive }) => isActive ? "nav-active" : ""}>{route.name}</NavLink>
                  </li>
                ))
              }
            </ul>
          </nav>

          {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Routes>
            {
              routes.map((route: RouteInterface) => (
                <Route key={`route: ${route.path}`} path={route.path} element={<route.Component />} />
              ))
            }

            <Route path='/*' element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </div>
      </Router>
    </Suspense>
  );
}