<template>
  <div class="article-feed-card">
    <h3 class="article-title">{{this.title}}</h3>
    <tag class="article-category">
      <span class="badge badge-primary">{{this.category}}</span>
    </tag>
    <article class="article-preview">{{this.preview}}</article>
  </div>
</template>

<script>
export default {
  name: "ArticleFeedCard",
  props: {
    articleId: {
      type: Number
    },
    title: {
      type: String
    },
    category: {
      type: String
    },
    preview: {
      type: String
    }
  }
};
</script>

<style scoped>
.article-feed-card {
  margin-bottom: 20px;
  padding:20px;
  box-shadow: 2px 2px 2px 2px #ddd;
}
</style>