<template>
  <div id="cards" ref="cards">
    <div v-for="(post, index) in posts" :key="index">
      <NuxtLink :to="post.slug" class="card p-3 text-decoration-none text-body">
        <div class="d-flex m-0 p-0">
          <div class="col-9 p-0 d-flex flex-column justify-content-between">
            <div class="h1">
              {{ post.title }}
            </div>
            <div>
              {{ post.content }}
            </div>
          </div>
          <div class="col">
            <img
              :src="require(`~/assets/images/${ post.image }`)"
              width="100%"
              height="100%"
              class="rounded"
            >
          </div>
        </div>
      </NuxtLink>
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
      posts: [
        {
          title: 'La révolution ou la mort',
          content: 'Hello World',
          slug: 'la-revolution-ou-la-mort',
          image: 'pierre-herman-Fw_2kaQZc90-unsplash.jpg',
          credit: 'Photo by <a href="https://unsplash.com/@lepipotron?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Pierre Herman</a> on <a href="https://unsplash.com/s/photos/revolution?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
        }
      ]
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.matchInfoBox()
    })
    window.addEventListener('resize', this.matchInfoBox)
  },
  methods: {
    matchInfoBox () {
      this.dimension.width = this.$refs.cards.clientWidth
      this.dimension.height = parseInt(this.dimension.width * 2 / 3)
    }
  }
}
</script>
