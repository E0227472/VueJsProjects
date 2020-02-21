<template>
  <div class="navbar-menu">
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a v-bind:href= "github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-github fa-2x" aria-hidden="true"></i>
          </a>
          <a v-bind:href= "twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-twitter fa-2x" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<!--Data is the equivalent to state in reactjs -->
<script>
  export default {
    name: "HeaderBarLinks",
    data() {
      return {
        github: "https://github.com/johnpapa/vue-getting-started",
        twitter: "https://twitter.com/john_papa"
      }
    }
  }
</script>
