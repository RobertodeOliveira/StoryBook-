import { string } from "prop-types"

interface BadgeProps extends React.HTMLAttributes<HTMLButtonElement>{ 

status: string
/**
 * O componente poderá receber um count onde exibirá o número de notificações pendentes
 */
size: string
}


export type { BadgeProps }