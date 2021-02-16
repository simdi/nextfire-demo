import React from 'react';
import Link from 'next/link';

function Navbar() {
  const { user, username } = {
    user: null,
    username: null
  };

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/">
            <button className="btn-logo">Feed</button>
          </Link>
        </li>

        {
          username && (
            <>
              <li className="push-left">
                <Link href="/admin">
                  <button className="btn-blue">Write Posts</button>
                </Link>
              </li>
              <li>
                <Link href={`/${username}`}>
                  <img src={user?.photoURL} />
                </Link>
              </li>
            </>
          )
        }

        {
          !username && (
            <>
            <li>
                <Link href="/sign-up">
                  <button className="btn-blue">Login In</button>
                </Link>
              </li>
            </>
          )
        }
      </ul>
    </nav>
  )
}

export default Navbar;
