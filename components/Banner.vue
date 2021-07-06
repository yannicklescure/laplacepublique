<template>
  <div>
    <h1>
      <span ref="wrap">&nbsp;</span>
    </h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      period: 1000,
      position: 0,
      toRotate: ['La place publique.', 'Pour une discussion ouverte.', 'Puisque nos dirigeants veulent une révolution populaire.', 'Organisons-nous !'],
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

      this.$refs.wrap.innerHTML = this.txt
      this.$refs.wrap.style.borderRight = '0.08em solid #000'

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
