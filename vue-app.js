// Single name components without dash is considered a bad practise however
// we go with it like plan for simplicity reason

Vue.component ('plan', {
    template: '#plan-template',
    props: {
        name: {
            type: String, required: true
        }
    }
});
new Vue ({
    el: '#app', data: {
        plans: [ 'The Single', 'The Curious', 'The Addict' ]
    }
});
