<template>
  <div class="comments content">
    <div v-if="isMsgVisible">
      Comments can't be loaded.<br>
      Please make sure that you have access to <a href="https://disqus.com" target="_blank">disqus.com</a> in your area.
    </div>

    <ClientOnly>
      <Disqus
        :shortname="shortname"
        :identifier="identifier"
        :url="url"
        :title="title"
        :language="language"/>
    </ClientOnly>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shortname: 'douweimusic',
      language: 'en',
      isMsgVisible: false
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
  },

  watch: {
    identifier() {
      this.$nextTick(
        window.DISQUS && window.DISQUS.reset({
          reload: true,
          config: function () {  
            this.page.identifier = this.identifier;
            this.page.url = this.url;
            this.page.title = this.title;
            this.language = this.language;
          }
        })
      )
    }
  },

  mounted() {
    setTimeout(() => {
      if (!window.DISQUS) {
        this.isMsgVisible = true;
      }
    }, 8000)
  }
}
</script>
