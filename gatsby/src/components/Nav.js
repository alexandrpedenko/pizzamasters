import React from 'react';
import { Link } from 'gatsby';
import { Logo, HeaderStyle, Container } from '../styles';

function Nav() {
  return (
    <HeaderStyle>
      <Container>
        <div className='header-wrap'>
          <Link to='/' className='header-logo'>
            <Logo />
          </Link>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/pizza'>Pizza</Link>
              </li>
              {/* <li>
                <Link to='/drinks'>Drinks</Link>
              </li> */}
              <li>
                <Link to='/aboutus'>About</Link>
              </li>
              <li>
                <Link to='/order'>Order</Link>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </HeaderStyle>
  );
}

export default Nav;
