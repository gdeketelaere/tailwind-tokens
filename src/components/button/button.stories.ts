import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
  };

  export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    // More on args: https://storybook.js.org/docs/react/writing-stories/args
    args: {
      variant: 'primary',
      children: 'Button',
    },
  };
  
  export const Secondary: Story = {
    args: {
        variant: 'secondary',
      children: 'Button',
    },
  };
  
  export const Tertiary: Story = {
    args: {
      variant: 'tertiary',
      children: 'Button',
    },
  };
  
  export const Ghost: Story = {
    args: {
        variant: 'ghost',
        children: 'Button',
    },
  };