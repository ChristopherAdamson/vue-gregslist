import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const _api = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api",
  timeout: 3000
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cars: [],
    activeCar: {},
  },
  mutations: {
    setCars(state, carsData) {
      state.cars = carsData
    },
    setActiveCar(state, carData) {
      state.activeCar = carData
    },
  },
  actions: {
    async getCars({ commit, dispatch }) {
      try {
        let res = await _api.get("cars")
        commit("setCars", res.data.data)
      } catch (error) { console.error(error) }
    },
    async getCar({ commit, dispatch }, carId) {
      try {
        let res = await _api.get("cars/" + carId)
        console.log(res.data);
        commit("setActiveCar", res.data.data)
      } catch (error) { console.error(error) }
    }
  },
  modules: {
  }
})
