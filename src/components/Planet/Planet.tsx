import React, {useRef} from 'react'
import ReactGlobe from 'react-globe'
import {IPlanetProps} from 'types'

export default function Planet({
  texture,
  planetClass = '',
  rotationSpeed,
  enableGlow,
  styles,
  height,
  width
} : IPlanetProps) {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <div className={`${planetClass} hidden`} style={styles} ref={ref}>
      <ReactGlobe
        height={height}
        width={width}
        globeTexture={texture}
        onGlobeTextureLoaded={() => {
          setTimeout(() => {
            if (ref.current) {
              ref.current.classList.remove('hidden')
            }
          }, 3000)
        }}
        options={{
          cameraAutoRotateSpeed: rotationSpeed,
          enableGlobeGlow: enableGlow,
          enableCameraZoom: false,
        }}
      />
    </div>
  )
}

