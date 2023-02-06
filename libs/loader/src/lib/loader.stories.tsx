import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { LoaderIcon } from './loader';

const Story: ComponentMeta<typeof LoaderIcon> = {
  component: LoaderIcon,
  title: 'LoaderIcon',
};
export default Story;

const Template: ComponentStory<typeof LoaderIcon> = (args) => (
  <LoaderIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 150,
  height: 150,
};
