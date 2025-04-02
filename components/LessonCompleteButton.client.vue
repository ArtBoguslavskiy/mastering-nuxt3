<script setup lang="ts">
defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});

defineEmits<{
  (e: "update:modelValue", payload: boolean): void;
}>();
</script>

<template>
  <label
    class="rounded text-white font-bold py-2 px-4 cursor-pointer"
    :class="{
      'bg-green-500': modelValue,
      'bg-gray-500': !modelValue,
    }">
    <input
      type="checkbox"
      :value="modelValue"
      class="hidden"
      @input="() => $emit('update:modelValue', !modelValue)" />
    {{ modelValue ? "Completed!" : "Mark as complete" }}
  </label>
</template>

<style scoped>
::selection {
  display: none;
}
</style>
