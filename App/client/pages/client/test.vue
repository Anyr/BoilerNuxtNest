<template>
  <div class="container is-flex-direction-column	">
    <section class="container">
      <Logo />
    </section>
    <section class="container">
      <Card>
        <div slot="header" class="p-4">
          <h2 class="title">La question posée ?</h2>
        </div>
        <Form slot="content"/>
      </Card>
    </section>
    <section class="container">
      <LoadingBar class="is-primary" />
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
