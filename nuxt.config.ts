import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  runtimeConfig: {
    stripeSecret: "",
    stripeWebhookSecret: "",
    public: {
      stripeKey: "",
    },
  },
  nitro: {
    prerender: {
      routes: ["/landing"],
    },
  },
  modules: ["@nuxt/eslint", "@vueuse/nuxt", "@nuxtjs/supabase", "@pinia/nuxt"],
  css: ["~/assets/css/main.css"],
  supabase: {
    redirectOptions: {
      login: "/login",
      callback: "/confirm",
      exclude: ["/*"],
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
