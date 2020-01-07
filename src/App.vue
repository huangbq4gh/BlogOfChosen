<template>
  <div id="app">
    <router-view name="topNav" />
    <div class="container home-view">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
#app {
  background-color: #eee;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

ul {
  text-decoration: none;
  list-style: none;
  padding-inline-start: 30px;
}


p {
  overflow: auto;
}

.card {
  margin-right: 5px;
  margin-bottom: 20px;
  padding: 20px;
  box-shadow: 2px 2px 2px 2px #ccc;
  background-color: #fff;
}
/* {
  background-color: #0abab5;
} */

/* .home-view{
  background-color: #6ADBD8;
} */
</style>
