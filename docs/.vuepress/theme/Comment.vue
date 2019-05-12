<template>
  <div class="comments content">
    <VueDisqus
      :shortname="shortname"
      :identifier="identifier"
      :url="url"
      :title="title"
      :language="language"
      :key="identifier"/>
  </div>
</template>

<script>
import VueDisqus from 'vue-disqus/dist/vue-disqus.vue';

export default {
  components: {
    VueDisqus
  },

  data() {
    return {
      shortname: 'douweimusic',
      language: 'en'
    }
  },

  computed: {
    identifier() {
      return this.$route.path;
    },

    url() {
      return 'https://douweimusic.com' + this.$route.path;
    },

    title() {
      return this.$title;
    }
  }
}
</script>
