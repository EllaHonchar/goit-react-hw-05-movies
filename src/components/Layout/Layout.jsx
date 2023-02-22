import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import s from '../Layout/Layout.module.scss';

export function Layout() {
  // const location = useLocation();
  return (
    <>
      <header className={s.header}>
        <nav>
          <NavLink
            end
            to={'/'}
            className={({ isActive }) => (isActive ? s.linkActive : s.link)}
          >
            Home
          </NavLink>
          <NavLink
            to="/movies"
            className={({ isActive }) => (isActive ? s.linkActive : s.link)}
          >
            Movies
          </NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
