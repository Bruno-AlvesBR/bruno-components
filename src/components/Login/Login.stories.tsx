import { Meta, Story } from "@storybook/react/types-6-0";
import { ILoginProps, Login } from ".";

export default {
  title: "Login",
  component: Login,
} as Meta;

const Template: Story<ILoginProps> = (args) => (
  <Login {...args} />
);

export const Default = Template.bind({});
Default.args = {
  openDialog: true,
};
