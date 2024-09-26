import { StoryFn } from "@storybook/react";

import "app/styles/index.scss";
import { Theme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";

export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) => {
  return (
    <div className={classNames("app", {}, [theme])}>
      <StoryComponent />
    </div>
  );
};
