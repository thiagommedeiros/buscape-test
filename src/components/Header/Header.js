import React from 'react'
import PropTypes from 'prop-types'

import {
  wrapper,
  logo,
} from './Header.module.scss'

const Header = ({
  children,
  logoSrc,
  altText
}) => (
  <header className={wrapper}>
    <img
      className={logo}
      src={logoSrc}
      alt={altText}
    />
    { children }
  </header>
)

Header.propTypes = {
  children: PropTypes.node,
  logoSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
}

export default React.memo(Header)
