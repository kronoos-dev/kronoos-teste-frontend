import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';

const meta = {
  title: 'Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DarkMode: Story = {
  args: {
    darkMode: true,
    message: 'YouTube Video',
    videoUrl: 'https://www.youtube.com/watch?v=Na0w3Mz46GA'
  },
};

export const LightMode: Story = {
  args: {
    darkMode: false,
    message: 'YouTube Video',
    videoUrl: 'https://www.youtube.com/watch?v=Na0w3Mz46GA'
  }
};

