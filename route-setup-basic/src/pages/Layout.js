import React from 'react'
import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div>
          <nav>
              <ul>
                  <li>
                      <Link to="/login">Login</Link>
                  </li>
                  <li>
                      <Link to="/about">About</Link>
                  </li>
                  <li>
                      <Link to="/">Home</Link>
                  </li>
              </ul>
          </nav>
         <Outlet />
    </div>
  )
}
