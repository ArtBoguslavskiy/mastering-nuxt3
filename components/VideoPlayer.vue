<script setup lang="ts">
defineProps<{
  videoId: number | string;
}>();
</script>

<template>
  <iframe
    width="560"
    height="315"
    :src="`https://player.vimeo.com/video/${videoId}`"
    title="Video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen />
</template>
