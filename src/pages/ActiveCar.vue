<template>
  <div class="activeCar row justify-content-center text-center bg-img">
    <div class="col-6 opac rounded border">
      <h5>{{car.make}}</h5>
      <h5>{{car.model}}</h5>
      <img class="img-fluid" :src="car.imgUrl" />
      <h5>${{car.price}}</h5>
      <h5>{{car.year}}</h5>
      <h5>{{car.description}}</h5>
    </div>
  </div>
</template>


<script>
export default {
  name: "activeCar",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getCar", this.$route.params.id);
  },
  computed: {
    car() {
      return this.$store.state.activeCar;
    },
  },
  methods: {},
  components: {},
};
</script>


<style scoped>
.bg-img {
  background-image: url("https://wallpapercave.com/wp/dH8aOb5.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
}
.opac {
  background-color: rgb(245, 245, 245, 0.3);
}
</style>