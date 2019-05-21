import React from 'react'
import PropTypes from 'prop-types'
import { wrapper, media, imageView } from './ImageView.module.scss'

const ImageView = ({ src, alt }) => (
  <div className={wrapper}>
    <div className={media}>
      <img
        className={imageView}
        src={src}
        alt={alt}
      />
    </div>
  </div>
)

ImageView.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}

export default React.memo(ImageView)
