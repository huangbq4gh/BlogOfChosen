<template>
  <div class="row home-view">
    <aside class="home-panel col-lg-3">
      <weather-gadget />
      <recent-activities-gadget />
    </aside>
    <main class="home-panel home-panel-main col-lg-9">
      <article-feeds-gadget />
    </main>
  </div>
</template>

<script>
import WeatherGadget from './WeatherGadget.vue';
import RecentActivitiesGadget from './RecentActivitiesGadget.vue';
import ArticleFeedsGadget from './ArticleFeedsGadget.vue';

export default {
  name: 'HomePage',
  components: {
    WeatherGadget,
    RecentActivitiesGadget,
    ArticleFeedsGadget,
  },
};
</script>

<style scoped>
.home-view {
  margin-top: 20px;
  background-color: #eee;
}

.home-panel {
  background-color: #eee;
}

.home-panel-main {
  padding-left: 30px;
}
</style>
