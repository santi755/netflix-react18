import type { Meta, StoryObj } from "@storybook/react";

import Button from "../components/atoms/button/Button";

const meta = {
  title: "Components/Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Primary button",
    customType: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary button",
    customType: "secondary",
  },
};

export const Terciart: Story = {
  args: {
    children: "Terciary button",
    customType: "terciary",
  },
};
