<template>
    <input class="input" type="text" :placeholder="placeholder" :value="value" @input="onChange">
</template>

<script>
export default {
    name: 'Input',
    props: {
        placeholder: {
            default: '',
            type: String,
        },
        value: {
            required: true,
            type: String,
        },
    },
    methods: {
        onChange(e) {
            console.log('inputChanged');
            this.$emit('changed', e.target.value);
        },
    }
}
</script>