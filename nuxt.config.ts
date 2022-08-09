import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxtlabs/github-module',
    '@nuxt/content'
  ],
  github: {
    disableCache: true,
    maxContributors: 10,
    token: process.env.GITHUB_TOKEN,
    api: 'https://api.github.com'
  }
})
