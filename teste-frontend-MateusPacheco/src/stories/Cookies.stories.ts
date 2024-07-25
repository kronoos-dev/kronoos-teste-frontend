import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Cookies } from './Cookies';

const meta = {
  title: 'Cookies',
  component: Cookies,
  parameters: {
    padded: true,
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
    label: 'Você aceita os cookies para que possamos melhorar o nosso site?'
  },
};

export const LightMode: Story = {
  args: {
    darkMode: false,
    label: 'Você aceita os cookies para que possamos melhorar o nosso site?'
  }
};

export const Fixed: Story = {
  args: {
    placement: 'fixed',
    label: 'Você aceita os cookies para que possamos melhorar o nosso site?'
  },
};

export const Floating: Story = {
  args: {
    placement: 'floating',
    label: 'Você aceita os cookies para que possamos melhorar o nosso site?'
  },
};

