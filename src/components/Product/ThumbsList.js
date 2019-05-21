import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import {
  wrapper,
  thumbsList,
  thumb,
  image,
  active,
} from './ThumbsList.module.scss'

import noPhotoImg from '../../assets/images/no-photo.png'

const ThumbsList = ({
  activeItem,
  images,
  alt,
  onClickItem,
}) => {
  const useDefaultImg = event => {
    event.target.src = noPhotoImg
  }

  return (
    <div className={wrapper}>
      <ul className={thumbsList}>
        {
          images.map((src, index) => {
            const thumbClasses = classNames(thumb, {
              [active]: index === activeItem
            })
            
            return (
              <li
                key={src}
                className={thumbClasses}
                onClick={onClickItem.bind(this, index)}
              >
                <img
                  className={image}
                  src={src}
                  alt={alt}
                  onError={useDefaultImg.bind(this)}
                />
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

ThumbsList.propTypes = {
  activeItem: PropTypes.number.isRequired,
  images: PropTypes.array.isRequired,
  alt: PropTypes.string.isRequired,
  onClickItem: PropTypes.func.isRequired,
}

export default React.memo(ThumbsList)
