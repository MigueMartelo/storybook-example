import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MyLabel } from '../../components/MyLabel';

export default {
  title: 'UI/MyLabel',
  component: MyLabel,
  argTypes: {
    color: { control: 'select' },
    customFontColor: { control: 'color' },
  },
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = (args) => (
  <MyLabel {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  size: 'normal',
  color: 'primary',
  allCaps: false,
};

export const AllCaps = Template.bind({});
AllCaps.args = {
  size: 'normal',
  color: 'primary',
  allCaps: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  size: 'normal',
  color: 'secondary',
  allCaps: false,
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  size: 'normal',
  color: 'tertiary',
  allCaps: false,
};

export const customFontColor = Template.bind({});
customFontColor.args = {
  size: 'h1',
  customFontColor: '#5517ac',
};
