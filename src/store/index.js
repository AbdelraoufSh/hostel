import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    images:[],home:[],header:[],about:[],logo:'',images1:[],service:[],room:[],images2:[],price:[],desc:[],opinions:[],clients:[],other:[],contact:[],footer:[]
  },
  getters: {
  },
  mutations: {
    get(state){
      axios('/api/hello')
      .then(response => {
        state.header=response.data.header;
        state.logo=response.data.logo;
        state.home=response.data.home;
        state.about=response.data.about;
        state.service=response.data.service;
        state.room=response.data.room;  
        state.price=response.data.price;
        state.desc=response.data.desc;
        state.opinions=response.data.opinion;
        state.clients=response.data.clients;
        state.other=response.data.other;
        state.contact=response.data.contact;
        state.footer=response.data.footer;
      })},
    async fetchImages(state) {
      try {
        // Send a GET request to the '/images' endpoint to fetch the list of image URLs
        const response = await axios.get('/api/images');
        state.images = response.data; // Set the response data (array of image URLs)
      } catch (error) {
        console.error('Error fetching images:', error);
      }
      for(let i=2;i<5;i++)
      state.images1.push(state.images[i]);
      for(let i=9;i<=10;i++)
      state.images2.push(state.images[i]);
    }
  },
  actions: {
  
  },
  modules: {
  }
})
