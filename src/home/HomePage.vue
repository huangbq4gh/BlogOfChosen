<template>
  <div class="row">
    <aside class="col-lg-3">
      <weather-gadget />
      <recent-activities-gadget />
    </aside>
    <main class="col-lg-9">
      <article-feeds-gadget />
    </main>
  </div>
</template>

<script>
import WeatherGadget from './WeatherGadget.vue';
import RecentActivitiesGadget from './RecentActivitiesGadget.vue';
import ArticleFeedsGadget from './ArticleFeedsGadget.vue';

export default {
  name: "HomePage",
  components: {
    WeatherGadget,
    RecentActivitiesGadget,
    ArticleFeedsGadget,
  }
};
</script>