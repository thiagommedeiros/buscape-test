import React, { useState } from 'react'
import classNames from 'classnames'

import {
  wrapper,
  active,
  line,
  badge,
} from './MenuButton.module.scss'

const MenuButton = ({ badgeValue, onClick }) => {
  const [isActive, setIsActive] = useState(false)

  const toogleActive = () => {
    setIsActive(!isActive)
    onClick(isActive)
  }

  const classes = classNames(wrapper, {
    [active]: isActive
  })

  return (
    <div
      className={classes}
      onClick={toogleActive.bind(this)}
    >
      {
        badgeValue > 0
          ? (
            <div className={badge}>
              { badgeValue }
            </div>
          ) : null
      }
      <span className={line}></span>
      <span className={line}></span>
      <span className={line}></span>
    </div>
  )
}

export default MenuButton
