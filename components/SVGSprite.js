import React from 'react'

export const SVGSprite = ({id, fill, stroke, size}) => {
  return (
    <svg className="ulcwp-svg" fill={fill} width={size} height={size}>
      <use href={`/images/svg-sprite.svg#${id}`} stroke={stroke} />
    </svg>
  )
}

SVGSprite.defaultProps = {
  size: 30,
  color: 'black',
};
