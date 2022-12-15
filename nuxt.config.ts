// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      WEATHER_APP_SECRET: process.env.WEATHER_APP_SECRET
    },
    privateRuntimeconfig: {
      
    }
  },
    css: ['~/assets/css/tailwind.css'],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  })
