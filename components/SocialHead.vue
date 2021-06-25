<template>
  <span v-if="false" />
</template>

<script>
// Test on: https://cards-dev.twitter.com/validator
// Test on: https://developers.facebook.com/tools/debug/
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description
        },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: `https://www.laplacepublique.org${this.$route.path}`
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: `${this.title} | La Place Publique`
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.description
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.image
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: this.title
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://www.laplacepublique.org${this.$route.path}`
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${this.title} | La Place Publique`
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.description
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.image
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: this.image
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: this.title
        }
      ],
      // canonical
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://www.laplacepublique.org${this.$route.path}`
        }
      ]
    }
  }
}
</script>
