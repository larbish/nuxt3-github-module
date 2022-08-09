<script setup lang="ts">
const qOwner = ref('nuxt-community')
const qRepo = ref('supabase-module')

const { fetchReleases } = useGithub()

const { data: releases, refresh } = await useAsyncData(
  `releases:${qOwner.value}:${qRepo.value}`,
  () => fetchReleases({ owner: qOwner.value, repo: qRepo.value }),
  { lazy: true }
)
</script>

<template>
  <div>
    <h1>
      USING COMPOSABLE:
    </h1>
    Fetch releases from:
    <div>
      Owner: <input v-model="qOwner" type="text">
    </div>
    <div>
      Repo: <input v-model="qRepo" type="text">
    </div>
    <button @click="refresh">
      Search
    </button>

    <div v-for="release of releases" :key="release.name" style="margin-top: 2rem">
      <h2>
        Release: {{ release.name }}
      </h2>

      <p>Version: {{ release.v }}</p>

      <p>URL: {{ release.url }}</p>

      <p>Tarball: {{ release.tarball }}</p>

      <p>Prerelease: {{ release.prerelease }}</p>

      <p>Reactions: {{ release.reactions }}</p>

      <p>Author: {{ release.author }}</p>
    </div>
  </div>
</template>
