<script setup lang="ts">
const { chapters, title } = useCourse();

const resetError = async (error: { value: string | null }) => {
  await navigateTo(
    "/course/chapter/1-chapter-1/lesson/1-introduction-to-typescript-with-vue-js-3"
  );
  error.value = null;
};
</script>

<template>
  <div>
    <div class="mb-4 flex justify-between items-center w-full">
      <h1 class="text-3xl">
        <span class="font-medium">
          <span class="font-bold">{{ title }}</span>
        </span>
      </h1>
      <UserCard />
    </div>

    <div class="flex flex-row justify-center flex-grow">
      <div
        class="prose mr-4 p-8 bg-white rounded-md min-w-[20ch] flex flex-col">
        <h3>Chapters</h3>
        <div
          v-for="chapter in chapters"
          :key="chapter.slug"
          class="space-y-1 mb-4 flex flex-col">
          <h4>{{ chapter.title }}</h4>
          <NuxtLink
            v-for="(lesson, index) in chapter.lessons"
            :key="lesson.slug"
            class="flex flex-row space-x-1 no-underline prose-sm font-normal py-1 px-4 -mx-4"
            exact-active-class="!text-blue-500"
            :to="lesson.path">
            <span class="text-gray-500">{{ index + 1 }}.</span>
            <span>{{ lesson.title }}</span>
          </NuxtLink>
        </div>
      </div>

      <div class="prose p-12 bg-red-100 rounded-md w-[65ch]">
        <NuxtErrorBoundary>
          <NuxtPage />
          <template #error="{ error }">
            <p>
              Oh no, something went wrong with the lesson!

              <code>{{ error }}</code>
              <button
                class="hover:cursor-pointer bg-gray-500 text-white font-bold py-1 px-3 rounded"
                @click="resetError(error)">
                Reset
              </button>
            </p>
          </template>
        </NuxtErrorBoundary>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
