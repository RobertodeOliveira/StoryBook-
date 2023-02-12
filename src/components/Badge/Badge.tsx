import { useState } from 'react'
import { BadgeProps } from './Badge.types'
import * as S from './styles'



const  Badge = ({ status }:BadgeProps) => {
  const [count, setCount] = useState(0)

  return(
      <S.ContainerWrapper> 
          <S.WrapperBadge > 
            <S.NumberStatus onClick={() => setCount(count +1)}></S.NumberStatus>
          </S.WrapperBadge>
      </S.ContainerWrapper>
  )
}

export {Badge}