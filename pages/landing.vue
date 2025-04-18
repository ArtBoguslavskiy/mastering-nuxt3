<script setup lang="ts">
import screen1 from "~/assets/images/screen1.png";
import screen3 from "~/assets/images/screen3.png";
import screen4 from "~/assets/images/screen4.png";
import screen5 from "~/assets/images/screen5.png";
import screen2 from "~/assets/images/screen2.png";

const course = await useCourse();
const learningOutcomes = [
  "Hands-On Experience with the Benefits of TypeScript",
  "How to make the most out of your IDE",
  "How to use TypeScript with the Composition API",
  "How to use TypeScript with the Options API",
  "How to type reactive data, refs, props, custom events, event handlers, DOM elements, template refs, data from provide/inject, and more",
];
const screenshots = [screen1, screen2, screen3, screen4, screen5];

definePageMeta({
  layout: false,
});

const showPayment = ref(false);
</script>

<template>
  <div>
    <SectionBlock class="space-y-12 flex flex-col items-center">
      <h1 class="text-7xl font-black text-blue-500 m-0 p-0">
        {{ course.title }}
      </h1>
      <img
        :src="screenshots[2]"
        class="w-full rounded-lg shadow-lg border-2 border-slate-200" />
      <div class="text-2xl font-medium">
        Learn how to use TypeScript in your Vue projects to supercharge your
        IDE's error detection and autocompletion, as well as provide type safe
        code that's easier to reason about and refactor.
      </div>
      <button
        class="bg-yellow-400 hover:bg-yellow-500 transition px-8 py-4 w-80 text-xl font-bold rounded-lg"
        @click="() => (showPayment = !showPayment)">
        Buy Now
      </button>
    </SectionBlock>
    <SectionBlock title="What You'll Learn">
      <ul class="text-2xl font-medium space-y-6">
        <li v-for="outcome in learningOutcomes" :key="outcome" class="relative">
          <BadgeBlock />
          {{ outcome }}
        </li>
      </ul>
    </SectionBlock>
    <SectionBlock title="Screenshots">
      <div class="flex flex-row flex-wrap relative my-12">
        <img
          v-for="image in screenshots"
          :key="image"
          :src="image"
          class="w-1/2 rounded-xl shadow-xl border-4 border-slate-200 even:rotate-2 even:hover:-rotate-2 odd:-rotate-2 odd:hover:rotate-2 transition" />
      </div>
    </SectionBlock>
    <SectionBlock title="Course Outline">
      <!-- Get course outline from course meta data  -->
      <ul class="text-2xl font-medium space-y-16">
        <li
          v-for="(chapter, index) in course.chapters"
          :key="chapter.slug"
          class="relative">
          <BadgeBlock>
            {{ index + 1 }}
          </BadgeBlock>
          {{ chapter.title }}

          <ul class="mt-4 space-y-2">
            <li
              v-for="lesson in chapter.lessons"
              :key="`${chapter.slug}-${lesson.slug}`"
              class="left-8 relative flex items-center space-y-2">
              <BadgeBlock color="bg-blue-400">
                {{ lesson.number }}
              </BadgeBlock>
              <span class="text-xl opacity-80">{{ lesson.title }}</span>
            </li>
          </ul>
        </li>
      </ul>
    </SectionBlock>
    <LazyPaymentBlock v-if="showPayment" @close="showPayment = false" />
  </div>
</template>
