import type { Preview } from "@storybook/react";

import { ThemeDecorator } from "./../../src/shared/config/storybook/ThemeDecorator";
import { RouteDecorator } from "./../../src/shared/config/storybook/RouteDecorator";
import { Theme } from "./../../src/app/providers/ThemeProvider/lib/ThemeContext";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [ThemeDecorator(Theme.LIGHT), RouteDecorator],
};

export default preview;
