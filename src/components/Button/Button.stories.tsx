import { StoryObj } from "@storybook/react"
import { ButtonProps } from "."

import TestButton from "."

export default {
    title: 'Button/TestButton',
    component: TestButton,
    parameters: 'componente button passado de forma dinâmica'
}

export const Default: StoryObj<ButtonProps> = {
    args: {
        title: 'Robertinho',
    },
  }