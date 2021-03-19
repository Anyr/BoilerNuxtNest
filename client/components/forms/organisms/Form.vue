<template>
<div class="form" :id="id">
    <div class="field" v-for="(item, index) in items" :key="id + '-field-' + index">
        <Label  class="is-large" :label="item.label" />
        <div class="control">
            <Input :data-id="index" class="is-large" :value="item.value" :placeholder="item.placeholder" @changed="fieldChanged" />
        </div>
    </div>
    <div class="field">
        <button @click="submitForm" class="button is-link">Submit</button>
    </div>
</div>
</template>

<script>
export default {
    name: 'Form',
    props: {
        id: {
            default: 'default',
            type: String,
        },
    },
    data() {
        return {
            items: [
                { label: 'Je suis un input', value: 'Wesh', placeholder: 'Une valeur' },
            ],
        };
    },
    methods: {
        submitForm() {
            console.log('Submit form');
            console.log('Model: ', this.items);
        },
        fieldChanged(e, value) {
            console.log('fieldChanged');
            console.log('value: ', value);
            console.log('e: ', e);
        }
    },
}
</script>