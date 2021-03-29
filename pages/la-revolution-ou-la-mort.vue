<template>
  <div ref="post" class="d-flex flex-column align-items-center">
    <h1>{{ post.title }}</h1>
    <div>
      <div class="my-3">
        <img
          :src="require(`~/assets/images/${ post.image }`)"
          :width="dimension.width"
          :height="dimension.height"
        >
        <div class="text-secondary small">
          <a href="https://unsplash.com/@lepipotron?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" class="text-secondary">Pierre Herman</a> / <a href="https://unsplash.com/s/photos/revolution?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" class="text-secondary">Unsplash</a>
        </div>
      </div>
      <PostContent
        :content="post.content"
      />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dimension: {
        width: 0,
        height: 0
      },
      post: {
        title: 'La révolution ou la mort',
        content: '# Hello World!',
        slug: 'la-revolution-ou-la-mort',
        image: 'pierre-herman-Fw_2kaQZc90-unsplash.jpg',
        credit: ''
      }
    }
  },
  methods: {
    matchInfoBox () {
      this.dimension.width = this.$refs.post.clientWidth
      this.dimension.height = parseInt(this.dimension.width * 2 / 3)
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.matchInfoBox()
    })
    window.addEventListener('resize', this.matchInfoBox)
  }
}
</script>
