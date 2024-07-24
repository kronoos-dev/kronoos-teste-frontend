import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Cookies } from './Cookies';

const meta = {
  title: 'Cookies',
  component: Cookies,
  parameters: {
  },
  argTypes: {
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof Cookies>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DarkMode: Story = {
  args: {
    darkMode: true,
  },
};

export const Fixed: Story = {
  args: {
    placement: 'fixed',
  },
};

export const Floating: Story = {
  args: {
    placement: 'floating',
  },
};

export const DarkModeFalse: Story = {
  args: {
    darkMode: false,
  }
};
