import { Story, Meta } from "@storybook/react/types-6-0";
import { Card, ICardProps } from ".";

export default {
  title: "Card",
  component: Card,
} as Meta;

const Template: Story<ICardProps> = (args) => (
  <Card {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
  category: "comida",
  rating: 4,
  price: 22,
  onclick: () => {},
};
