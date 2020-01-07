<template>
  <div>
    <div class="row card">
      <img src="../assets/cloudy.png" alt="Weather Icon" />
      <label for="Temperature">65 °F / 75 °F</label>

      <p>Enjoy your day!</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WeatherGadget',
};
</script>

<style scoped>
img {
  width: 100px;
  height: 100px;
}
</style>
