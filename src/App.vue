<template>
  <div id="app">
    <router-view name="topNav" />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
ul {
  text-decoration: none;
  list-style: none;
  padding-left: 0px;
}
p {
  overflow:auto;
}
</style>