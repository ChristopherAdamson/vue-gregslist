<template>
  <div class="Cars">
    <div class="row text-center border rounded bg-img">
      <car v-for="car in cars" :carData="car" :key="car.id" />
    </div>
  </div>
</template>


<script>
import Car from "../components/Car";
export default {
  name: "Cars",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getCars");
  },
  computed: {
    cars() {
      return this.$store.state.cars;
    },
  },
  methods: {},
  components: {
    Car,
  },
};
</script>


<style scoped>
.bg-img {
  background-image: url("https://wallpapercave.com/wp/dH8aOb5.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>