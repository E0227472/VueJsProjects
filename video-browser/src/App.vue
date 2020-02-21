<template>
    <div id="app">
    <SearchBar  @termChange= "onTermChange"/>
    <VideoList v-bind:videos= "videos"/>
    </div>
</template>

<!--import statements in script to import packages/ components -->
<!-- export statements in script exports the component reference name, and items to be used within 
component itself, methods, state or components-->

<script>
import axios from 'axios';
import SearchBar from './components/SearchBar';
const API_KEY = "AIzaSyAtWYEBiFVenXf8I2qnpkSzqlK3hNRHC98";
import VideoList from './components/videoList';

export default {
  name: 'App',
  components: {
    SearchBar, 
    VideoList
  }, 
  data () {
    return { 
      videos: []
    }
  },
  methods: {
    onTermChange(searchTerm)  {
      axios.get("https://www.googleapis.com/youtube/v3/search", {
        params: {
          key: API_KEY,
          type: 'video',
          part: 'snippet',
          q: searchTerm
        }
      }).then(response => {
        this.videos = response.data.items;
      } );
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
