import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ChakraButton } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/ChakraButton',
  component: ChakraButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ChakraButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ChakraButton> = (args) => <ChakraButton {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'ChakraButton',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'ChakraButton',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'ChakraButton',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'ChakraButton',
};
