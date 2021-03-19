<template>
    <label v-if="label != ''" class="label">{{label}}</label>
</template>

<script>
export default {
    name: 'Label',
    props: {
        label: {
            default: '',
            type: String,
        }
    }
}
</script>