<template>
  <div class="ActiveHouse row justify-content-center">
    <div class="rol-6 text-center">
      <h5>${{house.price}}</h5>
      <img class="img-fluid" :src="house.imgUrl" />
      <h5>{{house.bedrooms}}</h5>
      <h5>{{house.bathrooms}}</h5>
      <h5>{{house.levels}}</h5>
      <h5>{{house.year}}</h5>
      <p>{{house.description}}</p>
    </div>
  </div>
</template>


<script>
export default {
  name: "ActiveHouse",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getHouse", this.$route.params.id);
  },
  computed: {
    house() {
      return this.$store.state.activeHouse;
    },
  },
  methods: {},
  components: {},
};
</script>


<style scoped>
</style>