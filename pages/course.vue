<script setup lang="ts">
import { useCourseProgress } from "~/stores/courseProgress";
import { storeToRefs } from "pinia";

const course = await useCourse();
const firstLesson = await useFirstLesson();
const user = useSupabaseUser();

const { percentageCompleted } = storeToRefs(useCourseProgress());

const resetError = async (error: { value: string | null }) => {
  await navigateTo(firstLesson.path);
  error.value = null;
};
</script>

<template>
  <div>
    <div class="mb-4 flex justify-between items-center w-full">
      <h1 class="text-3xl">
        <span class="font-medium">
          <span class="font-bold">{{ course.title }}</span>
        </span>
      </h1>
      <UserCard />
    </div>

    <div class="flex flex-row justify-center flex-grow">
      <div
        class="prose mr-4 p-8 bg-white rounded-md min-w-[20ch] flex flex-col">
        <h3>Chapters</h3>
        <div
          v-for="(chapter, index) in course.chapters"
          :key="chapter.slug"
          class="space-y-1 mb-4 flex flex-col">
          <h4 class="flex justify-between items-center">
            {{ chapter.title }}
            <span
              v-if="percentageCompleted && user"
              class="text-emerald-500 text-sm">
              {{ percentageCompleted.chapters[index] }}%
            </span>
          </h4>
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
        <div
          v-if="percentageCompleted"
          class="mt-8 text-sm font-medium text-gray-500 flex justify-between items-center">
          Course completion:
          <span> {{ percentageCompleted.course }}% </span>
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
