import * as S from './styles'

export type ButtonProps = {
    title: string
    backgroundcolor: string
}

const TestButton = ( { title, backgroundcolor }:ButtonProps ) => {
    return (
            <S.Content bgcolor={backgroundcolor}>
                {title}
            </ S.Content>
    )
}

export default TestButton

