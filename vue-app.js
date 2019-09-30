// We can register a component Globally or Locally.
// This vue.component approach is the global one and it is not a good practise!!!

Vue.component ('plan-picker', {
    template: '#plan-picker-template', data() {
        return {
            // we could pass this data through props from the Vue root component but
            // in this way the component independent from the root.
            plans: [
                'The Single',
                'The Curious',
                'The Addict'
            ]
        }
    }
});

Vue.component ('plan', {
    template: '#plan-template', props: {
        name: {
            type: String, required: true
        }
    }
});

new Vue ({
    el: '#app'
});
