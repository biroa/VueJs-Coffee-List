// Single name components without dash is considered a bad practise however
// we go with it like plan for simplicity reason

Vue.component('plan',{
    template:'#plan-template',
    props:['name']
});
new Vue ({
    el: '#app'
});
