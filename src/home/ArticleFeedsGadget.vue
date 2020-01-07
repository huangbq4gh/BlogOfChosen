<template>
  <div class="row wrapper">
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
import ArticleFeedCard from './ArticleFeedCard.vue';

export default {
  name: 'ArticleFeedsGadget',
  components: {
    ArticleFeedCard,
  },
  computed: {
    currentFeeds() {
      return this.$store.getters['articleFeeds/currentFeeds'];
    },
  },
};
</script>

<style scoped>
/* ul {
  width: 100%;
} */

.article-feed-card {
  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  transition-duration: 0.5s;
}

.article-feed-card:hover {
  box-shadow: 5px 10px 5px 5px #ddd;
  cursor: pointer;
  transform:translateX(-5px);
}

.wrapper:hover .article-feed-card:not(:hover) {
  -webkit-filter: grayscale(0.5);
  filter: grayscale(0.5);
  opacity: 0.75;
}
</style>
