import React from "react";
import { Link } from 'react-router-dom'

const Header = () => (
  <header>
    <nav>
      <ul>
        <li>
          <Link to='/new_user'>Create New User</Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header;
