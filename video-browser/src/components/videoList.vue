<template>
<div>
  <VideoListItem v-for= "video in videos" :video= "video" :key="video.id.videoid"/>
</div>
</template>

<script>
import VideoListItem from './videoListItem';

export default {
    
    name: 'VideoList',
    props: ['videos'],
    components: {
        VideoListItem
    }
}
</script>

<style>

</style>