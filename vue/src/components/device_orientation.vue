<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <a href="javascript:;" @click="show" class="link">Show Device Orientation</a>
    <a class="link" @click="back">返回</a>
  </div>
</template>

<script>
  export default {
    name: 'orientation',
    data () {
      return {
        msg: 'Device Orientation'
      }
    },
    mounted () {
      this.$store.dispatch('setTitleAndBgColor', { pageTitle: 'Device Orientation', bgColor: '#1ffff0' })
    },
    methods: {
      show () {
        if (window.navigator.compass) {
          window.navigator.compass.getCurrentHeading((heading) => {
            alert('Heading: ' + heading.magneticHeading)
          }, (error) => {
            alert('CompassError: ' + error.code)
          })
        }
      },
      back () {
        let vm = this
        vm.$router.go(-1)
        return false
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/scss" scoped>
  h1, h2 {
    font-weight: normal;
    font-size: .6rem;
  }

  .link {
    display: block;
    color: #42b983;
    font-size: .5rem;
  }

  .photo {
    display: block;
    width: 6rem;
    height: auto;
    margin: .2rem auto;
  }
</style>
