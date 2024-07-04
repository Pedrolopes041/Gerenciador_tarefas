import { render } from "@testing-library/react";
import CustomButton from "./CustomButton";
import React from "react";

describe("Custom Button", () => {
    it("should render with correct children", () => {
        const { getByText } = render(<CustomButton>Lorem Ipsum</CustomButton>);

        getByText("Lorem Ipsum");
    });
});
