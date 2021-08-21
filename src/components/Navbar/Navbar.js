import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes  } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavItemBtn,
  NavLinks,
  NavBtnLink
} from './Navbar.elements';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavbarContainer>

            <NavLogo to='/' onClick={closeMobileMenu}>
              <NavIcon />
              Dapp Token Locker
            </NavLogo>


            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>



            <NavMenu onClick={handleClick} click={click}>

              <NavItem>
                <NavLinks to='/' onClick={closeMobileMenu}>
                  Home
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to='/dashboard' onClick={closeMobileMenu}>
                  Dashboard
                </NavLinks>
              </NavItem>


              <NavItem>
                <NavLinks to='/documentation' onClick={closeMobileMenu}>
                  Documentation
                </NavLinks>
              </NavItem>

              <NavItemBtn>
                {button ? (
                  <NavBtnLink >
                    <Button primary>Connect</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink >
                    <Button onClick={closeMobileMenu} fontBig primary>
                      Connect
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
