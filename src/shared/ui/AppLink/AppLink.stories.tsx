import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

import AppLink, { AppLinkTheme } from "./AppLink";


const meta = {
  title: "shared/AppLink",
  component: AppLink,
  argTypes: {},
  args: { to: "/" },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => (
    <AppLink to="/" theme={AppLinkTheme.PRIMARY}>
      Text
    </AppLink>
  ),
};

export const PrimaryDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  render: () => (
    <AppLink to="/" theme={AppLinkTheme.PRIMARY}>
      Text
    </AppLink>
  ),
};

export const Secondary: Story = {
  render: () => (
    <AppLink to="/" theme={AppLinkTheme.SECONDARY}>
      Text
    </AppLink>
  ),
};

export const SecondaryDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  render: () => (
    <AppLink to="/" theme={AppLinkTheme.SECONDARY}>
      Text
    </AppLink>
  ),
};
