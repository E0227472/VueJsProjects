<template>
  <div id="app">
    <HeaderBar />
    <div class="main-section content-title-group">
      <h2 class="title">Heroes</h2>
      <div>We'll start here</div>
    </div>
  </div>
</template>

<!--import and export statements are written here in between the script tag-->
<script>
import HeaderBar from '@/components/header-bar';

export default {
  name: 'App',
  components: { HeaderBar },
};
</script>

<!--All the styles are imported / or inline styling done here-->
<style lang="scss">
@import '@/design/index.scss';
</style>
