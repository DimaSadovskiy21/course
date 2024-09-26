import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

import LangSwitcher, { LangSwitcherTheme } from "./LangSwitcher";


const meta = {
  title: "widgets/LangSwitcher",
  component: LangSwitcher,
  argTypes: {},
} satisfies Meta<typeof LangSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => <LangSwitcher theme={LangSwitcherTheme.PRIMARY} />,
};

export const PrimaryDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  render: () => <LangSwitcher theme={LangSwitcherTheme.PRIMARY} />,
};

export const Secondary: Story = {
  render: () => <LangSwitcher theme={LangSwitcherTheme.SECONDARY} />,
};

export const SecondaryDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  render: () => <LangSwitcher theme={LangSwitcherTheme.SECONDARY} />,
};
