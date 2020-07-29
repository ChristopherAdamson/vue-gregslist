<template>
  <div class="Houses">
    <div class="row">
      <House v-for="house in houses" :houseData="house" :key="house.id" />
    </div>
  </div>
</template>


<script>
import House from "../components/House";
export default {
  name: "Houses",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getHouses");
  },
  computed: {
    houses() {
      return this.$store.state.houses;
    },
  },
  methods: {},
  components: {
    House,
  },
};
</script>


<style scoped>
</style>