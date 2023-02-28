import { Meta, Story } from '@storybook/angular/types-6-0';
import { ButtonComponent } from './button.component';

export default {
    title: "Components/Button",
    component: ButtonComponent,
    args: {
        label: 'Button',
    }
} as Meta; 

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
    props: args,
});

export const Primary = Template.bind({})
Primary.args = {
    type: "primary",

}

export const Secundary = Template.bind({})
Secundary.args = {
    type: "secundary",

}
export const Tertiary = Template.bind({})
Tertiary.args = {
    type: "tertiary",

}