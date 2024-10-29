import { fireEvent, screen } from "@testing-library/react";

import { componentRender } from "shared/lib/tests/componentRender/componentRender";

import Sidebar from "./Sidebar";

describe("Sidebar", () => {
  test("Test render", () => {
    componentRender(<Sidebar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });

  test("toggle Button", () => {
    componentRender(<Sidebar />);
    const toggleBtn = screen.getByTestId("toggleBtn");
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId("sidebar")).not.toHaveClass("collapsed");
  });
});
