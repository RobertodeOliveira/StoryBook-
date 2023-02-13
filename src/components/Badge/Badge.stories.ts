import { StoryObj } from "@storybook/react";

import { Badge } from "./Badge";
import { BadgeProps } from "./Badge.types";

export default {
  title: 'Badge/Badge',
  component: Badge,
  parameters: 'Componente de status'
} as unknown as BadgeProps

export const Default: StoryObj<BadgeProps> = {
    args: {
      status: '0',
    },
}
