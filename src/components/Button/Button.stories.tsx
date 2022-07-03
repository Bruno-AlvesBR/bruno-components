import { Button, IButtonProps } from "./index";
import { Story, Meta } from "@storybook/react/types-6-0";

export default {
  title: "Button",
  component: Button,
} as Meta;

const Template: Story<IButtonProps> = (args) => (
  <Button {...args} />
);

export const DefaultButton = Template.bind({});
DefaultButton.args = {
  message: "message",
  onclick: () => {},
};
