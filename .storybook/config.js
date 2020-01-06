import React from "react";
import results from '../.jest-test-results.json';
import { withTests } from '@storybook/addon-jest';
import { configure, addDecorator } from '@storybook/react';

addDecorator(storyFn => <div style={{ display: 'flex', justifyContent: 'center' }}>{storyFn()}</div>);
addDecorator(withTests({ results}));

// automatically import all files ending in *.stories.js
configure(require.context('../src/', true, /\.stories\.js$/), module);
