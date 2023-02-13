import { useState } from 'react'
import { BadgeProps } from './Badge.types'
import * as S from './styles'



const  Badge = () => {
  const [count, setCount] = useState(0)

  return(
    <S.Container>
      <S.ContainerWrapper> 
          <S.WrapperBadge > 
            {count}
          </S.WrapperBadge>
      </S.ContainerWrapper>
      <S.ButtonCount onClick={() => setCount(count + 1)}>+</S.ButtonCount>
    </S.Container>
  )
}

export {Badge}