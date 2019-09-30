// We can register a component Globally or Locally.
// This is the local registration of a component but now
// can not use the plan component outside of the plan-picker context because we will get an error!
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
