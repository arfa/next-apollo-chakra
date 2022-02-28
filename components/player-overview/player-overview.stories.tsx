import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PlayerOverview } from './player-overview';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/PlayerOverview',
  component: PlayerOverview,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof PlayerOverview>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PlayerOverview> = (args) => <PlayerOverview {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  firstName: 'John',
  lastName: 'Doe',
  countryUrl: 'http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg',
  countryCode: 'FR',
  picture: 'https://picsum.photos/200/300',
  sexe: 'M',
  shortName: 'JD',
  rank: 1,
  age: 20,
  height: 1.8,
  weight: 80,
  points: 100,
  last: [true, false, true, true, true],
};