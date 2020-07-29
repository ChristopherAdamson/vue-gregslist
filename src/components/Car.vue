<template>
  <div class="Car w-75 col-4 opac" @click="toCarPage">
    <h5>{{carData.make}}</h5>
    <h5>{{carData.model}}</h5>
    <img class="img-fluid" :src="carData.imgUrl" />
  </div>
</template>


<script>
export default {
  name: "Car",
  data() {
    return {};
  },
  props: ["carData"],
  computed: {},
  methods: {
    toCarPage() {
      this.$router.push({ name: "Car", params: { id: this.carData._id } });
    },
  },
  components: {},
};
</script>


<style scoped>
.opac {
  background-color: rgb(245, 245, 245, 0.3);
}
</style>