import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';

const meta = {
  title: 'Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DarkMode: Story = {
  args: {
    darkMode: true,
    tab1: 'Tab 1',
    tab2: 'Tab 2',
    tab1Content: 'Conteúdo da aba 1',
    tab2Content: 'Conteúdo da aba 2'
  },
};

export const LightMode: Story = {
  args: {
    darkMode: false,
    tab1: 'Tab 1',
    tab2: 'Tab 2',
    tab1Content: 'Conteúdo da aba 1',
    tab2Content: 'Conteúdo da aba 2'
  }
};

