import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { ProtectedRoute } from './protected-route';

const Story: ComponentMeta<typeof ProtectedRoute> = {
  component: ProtectedRoute,
  title: 'ProtectedRoute',
};
export default Story;

const Template: ComponentStory<typeof ProtectedRoute> = (args) => (
  <ProtectedRoute {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
