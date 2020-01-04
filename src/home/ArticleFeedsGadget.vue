<template>
  <div class="row">
    <ul>
      <li v-for="(feed, index) in currentFeeds" :key="index">
        <article-feed-card
          :articleId="feed.articleId"
          :title="feed.articleTitle"
          :category="feed.articleCategory"
          :preview="feed.articlePreview"
        />
      </li>
    </ul>
    <div class="row">
      <button class="btn btn-outline-primary">Load More</button>
    </div>
  </div>
</template>

<script>
import ArticleFeedCard from "./ArticleFeedCard.vue";

export default {
  name: "ArticleFeedsGadget",
  components: {
    ArticleFeedCard
  },
  computed: {
    currentFeeds() {
      return this.$store.getters["articleFeeds/currentFeeds"];
    }
  }
};
</script>

<style scoped>
ul{
    width:100%;
}
</style>