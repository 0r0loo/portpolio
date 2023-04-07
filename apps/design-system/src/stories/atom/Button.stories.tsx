import {Meta, StoryObj} from "@storybook/react";
import {Button} from "@blue/ui";

const meta: Meta<typeof Button> ={
    title: "Atom/Button",
    component: Button,
}

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    render: () => <Button/>
}