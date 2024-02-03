import { render } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";


test("renders the root component correctly", () => {
    const {container} = render (
        <Provider store={store}>
            <App/>
        </Provider>
    )
    // eslint-disable-next-line testing-library/no-node-access
    const rootComponent = container.firstChild;
    expect(rootComponent).toBeInTheDocument();
})