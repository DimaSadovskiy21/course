import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

import Button, { ThemeButton } from "./Button";


const meta = {
  title: "shared/Button",
  component: Button,
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => <Button>Text</Button>,
};

export const PrimaryDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  render: () => <Button>Text</Button>,
};

export const Clear: Story = {
  render: () => <Button theme={ThemeButton.CLEAR}>Text</Button>,
};

export const ClearDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  render: () => <Button theme={ThemeButton.CLEAR}>Text</Button>,
};

export const Outline: Story = {
  render: () => <Button theme={ThemeButton.OUTLINE}>Text</Button>,
};

export const OutlineDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  render: () => <Button theme={ThemeButton.OUTLINE}>Text</Button>,
};
