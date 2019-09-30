// Single name components without dash is considered a bad practise however
// we go with it like plan for simplicity reason

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
})

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
