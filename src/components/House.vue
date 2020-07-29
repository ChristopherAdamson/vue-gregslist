<template>
  <div class="House col-4" @click="goToActiveHouse">
    <div class>
      <h5>${{houseData.price}}</h5>
      <img class="img-fluid" :src="houseData.imgUrl" />
    </div>
  </div>
</template>


<script>
export default {
  name: "House",
  data() {
    return {};
  },
  props: ["houseData"],
  computed: {},
  methods: {
    goToActiveHouse() {
      this.$router.push({ name: House, params: { id: this.houseData._id } });
    },
  },
  components: {},
};
</script>


<style scoped>
</style>