// We can pass data to child components using props.
// But we need something else to pass data from the child to the parent.
let PlanComponent;
PlanComponent = {
    template: '#plan-template', props: {
        name: {
            type: String, required: true
        }
    }
};

let PlanPickerComponent = {
    template: '#plan-picker-template', components: {
        // keys are the name of the component
        // the value is the option object
        plan: PlanComponent
    }, data() {
        return {
            // we could pass this data through props from the Vue root component but
            // in this way the component independent from the root.
            plans: [ 'The Single', 'The Curious', 'The Addict' ]
        }
    }
};

new Vue ({
    el: '#app',
    components: {
        // We can use it in this way too !!!
        //'plan-picker':PlanPickerComponent
        PlanPicker:PlanPickerComponent
    }
});
