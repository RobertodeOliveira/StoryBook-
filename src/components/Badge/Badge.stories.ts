import { StoryObj } from "@storybook/react";

import { Badge } from "./Badge";
import { BadgeProps } from "./Badge.types";

export default {
    title:'Badge/Badge',
    component: Badge,
    parameters:'Componente de status'
}

export const Default: StoryObj<BadgeProps> = {
    args: {
      status: '0',
    },
}