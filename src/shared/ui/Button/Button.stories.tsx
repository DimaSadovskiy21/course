import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

import Button, { SizeButton, ThemeButton } from "./Button";

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

export const OutlineSizeM: Story = {
  render: () => (
    <Button theme={ThemeButton.OUTLINE} size={SizeButton.M}>
      Text
    </Button>
  ),
};

export const OutlineSizeL: Story = {
  render: () => (
    <Button theme={ThemeButton.OUTLINE} size={SizeButton.L}>
      Text
    </Button>
  ),
};

export const OutlineSizeXL: Story = {
  render: () => (
    <Button theme={ThemeButton.OUTLINE} size={SizeButton.XL}>
      Text
    </Button>
  ),
};

export const OutlineDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  render: () => <Button theme={ThemeButton.OUTLINE}>Text</Button>,
};

export const Background: Story = {
  render: () => <Button theme={ThemeButton.BACKGROUND}>Text</Button>,
};

export const BackgroundInverted: Story = {
  render: () => <Button theme={ThemeButton.BACKGROUND_INVERTED}>Text</Button>,
};

export const SquareSizeM: Story = {
  render: () => (
    <Button theme={ThemeButton.BACKGROUND_INVERTED} square size={SizeButton.M}>
      {">"}
    </Button>
  ),
};

export const SquareSizeL: Story = {
  render: () => (
    <Button theme={ThemeButton.BACKGROUND_INVERTED} square size={SizeButton.L}>
      {">"}
    </Button>
  ),
};

export const SquareSizeXL: Story = {
  render: () => (
    <Button theme={ThemeButton.BACKGROUND_INVERTED} square size={SizeButton.XL}>
      {">"}
    </Button>
  ),
};
