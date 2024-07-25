import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';

const meta = {
  title: 'Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DarkMode: Story = {
  args: {
    darkMode: true,
    question1: 'Pergunta 1',
    question2: 'Pergunta 2',
    question3: 'Pergunta 3',
    answer1: 'Resposta 1',
    answer2: 'Resposta 2',
    answer3: 'Resposta 3',
  },
};

export const LightMode: Story = {
  args: {
    darkMode: false,
    question1: 'Pergunta 1',
    question2: 'Pergunta 2',
    question3: 'Pergunta 3',
    answer1: 'Resposta 1',
    answer2: 'Resposta 2',
    answer3: 'Resposta 3',
  }
};

