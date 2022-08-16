import { useCallback, useEffect, useRef, useState } from 'react'
import { Box, styled } from '@mui/material'

const ContainerRelative = styled(Box)`
  position: relative;
  max-width: ${props => props.max}px;
  width: 100%;
`

const Container = styled(Box)`
  justify-content: center;
  max-width: 100%;
  width: 100%;
  overflow-x: scroll;
  display: flex;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }

  .buttons {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    justify-content: space-between;
    max-width: 100%;
    width: 100%;

    button {
      background: transparent;
      border: none;
      cursor: pointer;
    }

    .prev {
      transform: translateX(10px);
    }

    .next {
      transform: translateX(-10px);
    }
  }
`

export function Carousel({ children, showArrows }) {
  const mutableRefObject = useRef(null)
  const [stateCarousel, setStateCarousel] = useState()

  const handleCarousel = useCallback(() => {
    if (mutableRefObject.current) {
      const carousel = mutableRefObject.current
      setStateCarousel({
        ...stateCarousel,
        width_Carousel: carousel.clientWidth,
        qnt_children: carousel.children.length,
        width_children: carousel.children.item(0)?.clientWidth * 3,
        max_width_carousel:
          (carousel.children.length - 1) *
          carousel.children.item(0)?.clientWidth,
      })
    }
  }, [stateCarousel])

  const handleCarouselAction = e => {
    e.preventDefault()

    switch (e.currentTarget.id) {
      case 'next':
        return (mutableRefObject.current.scrollLeft += 276)

      case 'prev':
        return (mutableRefObject.current.scrollLeft -= 276)

      default:
        return null
    }
  }

  useEffect(() => handleCarousel(), [handleCarousel])

  return (
    <ContainerRelative max={880}>
      <Container ref={mutableRefObject}>
        {children}

        {showArrows && (
          <div className="buttons">
            <button onClick={handleCarouselAction} id="next" className="next">
              <img src="/assets/ssc.png" alt={'DropDownRight'} />
            </button>
            <button onClick={handleCarouselAction} id="prev" className="prev">
              <img src="/assets/ssc.png" alt={'DropDownLeft'} />
            </button>
          </div>
        )}
      </Container>
    </ContainerRelative>
  )
}
