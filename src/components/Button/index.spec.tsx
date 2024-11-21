import { describe, it } from "node:test";
import { render } from "@testing-library/react"
import { Button } from "./Button";

describe("<Button>", () => {
    it("shound render button", () => {
        render(<Button>button</Button>)
    })
})