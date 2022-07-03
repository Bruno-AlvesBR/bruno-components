import { Story, Meta } from "@storybook/react/types-6-0";
import { DefaultCarrousel, ICarrousel } from ".";

export default {
  title: "Default Carrousel",
  component: DefaultCarrousel,
} as Meta;

const Template: Story<ICarrousel> = (args) => (
  <DefaultCarrousel {...args}>
    <div
      style={{
        minWidth: 280,
        marginRight: 20,
        height: 300,
        background: "#aaa",
      }}
    />
    <div
      style={{
        minWidth: 280,
        marginRight: 20,
        height: 300,
        background: "#aaa",
      }}
    />
    <div
      style={{
        minWidth: 280,
        marginRight: 20,
        height: 300,
        background: "#aaa",
      }}
    />
    <div
      style={{
        minWidth: 280,
        marginRight: 20,
        height: 300,
        background: "#aaa",
      }}
    />
    <div
      style={{
        minWidth: 280,
        marginRight: 20,
        height: 300,
        background: "#aaa",
      }}
    />
    <div
      style={{
        minWidth: 280,
        marginRight: 20,
        height: 300,
        background: "#aaa",
      }}
    />
    <div
      style={{
        minWidth: 280,
        marginRight: 20,
        height: 300,
        background: "#aaa",
      }}
    />
    <div
      style={{
        minWidth: 280,
        marginRight: 20,
        height: 300,
        background: "#aaa",
      }}
    />
    <div
      style={{
        minWidth: 280,
        height: 300,
        background: "#aaa",
      }}
    />
  </DefaultCarrousel>
);

export const Default = Template.bind({});
Default.args = {
  mobileWidth: 260,
  desktopWidth: 300,
};
