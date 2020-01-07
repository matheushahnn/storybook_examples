import React from "react";
import results from '../.jest-test-results.json';
import { withTests } from '@storybook/addon-jest';
import { configure, addDecorator, addParameters } from '@storybook/react';


addDecorator(storyFn2 => <div style={{ display: 'flex', justifyContent: 'center' }}>{storyFn2()}</div>);
addDecorator(withTests({ results}));

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.(js|jsx|ts|tsx|mdx)$/), module);