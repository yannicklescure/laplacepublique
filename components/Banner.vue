<template>
  <div>
    <div class="text-center my-5">
      <div class="h1">
        Rejoignez-nous dès maintenant
      </div>
      <ButtonTelegram :type="'btn-lg'" :color="'success'" class="mt-5" />
    </div>
    <div class="h4">
      <span ref="wrap">>&nbsp;{{ message }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: '',
      period: 2000,
      position: 0,
      toRotate: ['La place publique.', 'Une discussion ouverte.', 'Nos dirigeants ont trahi le peuple.', 'Une révolution populaire est en marche.', 'Organisons-nous !'],
      loopNum: 0,
      txt: '',
      isDeleting: false,
      delta: 0,
      fullTxt: '',
      next: false
    }
  },
  mounted () {
    this.delta = 200 - Math.random() * 100
    this.typeWrite()
  },
  methods: {
    typeWrite () {
      if (this.next && this.txt === '') {
        this.position = this.position++ >= this.toRotate.length - 1 ? 0 : this.position++
      }
      this.fullTxt = this.toRotate[this.position]
      // const i = this.loopNum % this.toRotate.length
      if (this.isDeleting) {
        this.txt = this.fullTxt.substring(0, this.txt.length - 1)
      } else {
        this.txt = this.fullTxt.substring(0, this.txt.length + 1)
      }

      if (this.$refs.wrap) {
        // this.$refs.wrap.innerHTML = this.txt
        this.message = this.txt
        this.$refs.wrap.style.borderRight = '0.08em solid #000'
        this.$refs.wrap.style.animation = 'blink .5s step-end infinite alternate'
      }

      if (this.isDeleting) { this.delta /= 2 }

      if (!this.isDeleting && this.txt === this.fullTxt) {
        this.next = true
        this.delta = this.period
        this.isDeleting = true
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false
        this.loopNum++
        this.delta = 500
      }

      setTimeout(() => {
        this.typeWrite()
      }, this.delta)
    }
  }
}
</script>

<style>
  @keyframes blink { 50% { border-color: #fff }  }
</style>
