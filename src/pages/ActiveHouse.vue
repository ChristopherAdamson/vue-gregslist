<template>
  <div class="ActiveHouse"></div>
</template>


<script>
export default {
  name: "ActiveHouse",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getCar", this.$route.params.id);
  },
  computed: {
    House() {
      return this.$store.state.activeHouse;
    },
  },
  methods: {},
  components: {},
};
</script>


<style scoped>
</style>