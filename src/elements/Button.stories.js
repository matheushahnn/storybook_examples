import React from "react";
import Button from "./Button";
import results from '.././../.jest-test-results.json';
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import { withTests } from "@storybook/addon-jest";

export default {
  title: "Elements|Button",
  decorators: [
    withKnobs, 
    withTests({ results}),
    storyFn2 => <div style={{ maxWidth: '300px' }}>{storyFn2()}</div>
  ],
}

export const button = () => (
  <Button 
    disabled={boolean("Disabled", false)}
    text={text("Label", "Submit", "text")}
  ></Button>
);

button.story = {
  parameters: {
    jest: ['Button.test.js']
  }
}
