import { Meta, Story } from "@storybook/react/types-6-0";
import { DefaultInput, IInputProps } from ".";

export default {
  title: "Default Input",
  component: DefaultInput,
} as Meta;

const Template: Story<IInputProps> = (args) => (
  <DefaultInput {...args} />
);

export const Index = Template.bind({});
Index.args = {
  message: "test",
};
