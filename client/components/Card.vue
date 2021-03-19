<template>
    <div class="card">
        <header class="card-header">
            <slot name="header" />
        </header>
        <div class="card-content">
            <slot name="content" />
        </div>
        <footer class="card-footer">
            <slot name="footer" />
        </footer>
    </div>
</template>

<script>
export default {
    name: 'Card',
}
</script>