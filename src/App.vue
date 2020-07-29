<template>
  <div id="app">
    <div id="nav text-center bg-primary">
      <router-link to="/">Home</router-link>|
      <router-link to="/cars">Cars</router-link>|
      <router-link to="/houses">Houses</router-link>|
      <router-link to="/jobs">Jobs</router-link>
    </div>
    <router-view />
  </div>
</template>




<style scoped>
</style>
